'''
Created on 26 ago. 2017

@author: Val
'''
import logging
from messages.pyGenealogymessages import NO_VALID_CONVENTION, NO_VALID_ACCURACY, NO_VALID_LOCATION, NO_VALID_KEY
from messages.pyGenealogymessages import NO_VALID_BIRTH_DATE, NO_VALID_DEATH_DATE, NO_VALID_DEATH_AND_BURIAL
from datetime import date
from pyGenealogy import VALUES_ACCURACY, get_mapbox_key, NOT_KNOWN_VALUE
from metaphone import doublemetaphone
from Levenshtein import jaro
import math, copy
import pyGenealogy, os, re
from mapbox import Geocoder

THRESHOLD_JARO = 0.7

MONTH_DAYS = { 1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6:30, 7:31, 8:31, 9: 30, 10: 31, 11:30, 12:31, None:31}

DATA_FOLDER = os.path.join(os.path.dirname(pyGenealogy.__file__), "data")

GOOGLE_GEOLOCATION_ADDRESS = "https://maps.googleapis.com/maps/api/geocode/json?"

LOCATION_KEYS = ["place_name", "city", "county", "state", "country"]

MAPBOX_TRANS_GENITOOLS = {"locality" : "city", "place" : "place_name", "region" : "county",
                          "country" : "country", "address" : "place_name", "poi" : "place_name"}

naming_conventions = ["father_surname", "spanish_surname"]
#These are the particles used in different languages inside the surnames to connect them but in capital letters as a title
LANGUAGES_ADDS_TITLE = {"en" : [], "es" : ["san"]}
#These are the particles used in different languages inside the surnames to connect them but NOT in capital letters
LANGUAGES_ADDS = {"en" : [], "es" : ["de", "la", "del",  "los", "las"]}

LANGUAGES_NEXUS = {"en" : ["and"], "es" : ["y"]}

LANGUAGES_FILES = { "es" : {"surname" : "surname_es.txt", "name" : "names_es.txt",
                        "normalize" : {"á" : "a", "é" : "e", "í" : "i", "ó" : "o", "ú" : "u", "ñ": "n", "b":"v","th":"t", "ph": "f"}}}

LANGUAGES_DATA = {}

ROMAN_NUMBERS = [ "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVI", "XVII", "XVIII", "XIX", "XX"]

MAXIMUM_LIFESPAN = 123

def is_year(my_potential_year):
    '''
    A simple module to detect if a given string is a year. Notice than when using
    datetime module is not possible to make the difference and detect if 1894 is just
    a year compared to 1st Jan 1894 when using strptime
    '''
    try:
        year = int(my_potential_year)
        if year > 2990: return False
        return True
    except ValueError:
        return False
#TODO: include further naming conventions
def get_children_surname(father_surname, mother_surname, selected_convention):
    '''
    Simple function that provides the surname of children given the surname of
    both parents
    '''
    if (selected_convention == "father_surname"):
        return father_surname
    elif (selected_convention == "spanish_surname"):
        return father_surname + " " + mother_surname
    else:
        logging.error(NO_VALID_CONVENTION)
        return ""
def get_name_from_fullname(full_name, list_father_surnames, list_mother_surnames, language="en"):
    '''
    Given a full name, including surname, this function will provide out the first name of
    the person removing the surname of the person
    '''
    merged_list = list_father_surnames + list_mother_surnames
    for surname in merged_list:
        temp_surname = surname.split(" ")
        if len(temp_surname) > 1:
            for i, _ in enumerate(temp_surname):
                if temp_surname[i] in LANGUAGES_ADDS[language]:
                    temp_surname[i] = ""
            new_surname = " ".join(temp_surname).rstrip().strip()
            if (new_surname not in merged_list): merged_list.append(new_surname)
    merged_metaphore = []
    for data in merged_list:
        if adapted_doublemetaphone(data, language) not in merged_metaphore:
            merged_metaphore.append(adapted_doublemetaphone(data, language))
    full_name_list = get_splitted_name_from_complete_name(full_name, language)
    for i, value in enumerate(full_name_list[0]):
        #We remove from the specific particle the particles from each language that are used inside surnames
        #to connect
        check_surname = value.split(" ")
        if len(check_surname) > 1:
            for j, value in enumerate(check_surname):
                if (check_surname[j].lower() in LANGUAGES_ADDS[language]):
                    check_surname[j] = ""
        adapted_surname = "".join(check_surname).rstrip()
        if (adapted_doublemetaphone(value, language) in merged_metaphore) or (adapted_doublemetaphone(adapted_surname, language) in merged_metaphore):
            #The methapone algorithm is not perfect... so that we include here a crosschecking of very close phonetical, but far written data.
            similar = 0
            for compared in merged_list:
                if jaro(adapted_surname, compared) > similar: similar = jaro(adapted_surname, compared)
            if similar > THRESHOLD_JARO:
                full_name_list[0][i] = ""
    return " ".join(full_name_list[0]).rstrip()
def adapted_doublemetaphone(data, language="en"):
    '''
    Adapted function to take into account specific topics not considered in original version
    it accepts both strings and lists of strings
    '''
    if (isinstance(data, str)):
        list_data = [data]
        using_string = True
    else:
        list_data = data
        using_string = False
    #We perform the operation ina list, and then we return the result
    result = []
    for data2met in list_data:
        if (language == "es"):
            if not re.match(r"[Cc]h", data2met):
                data2met = re.sub(r"h", "", data2met.lower().replace("ph", "f"))
            #In spanish b and v are pronunced equally, if we know the language is spanish we shall remove!
            result.append(doublemetaphone(data2met.lower().replace("v", "b").replace("gi","ji").replace("ge","je").replace("ph","f")))
        result.append(doublemetaphone(data2met))
    if using_string:
        return result[0]
    else:
        return result
def checkDateConsistency(all_events):
    '''
    Checker of the different dates are consistent
    '''
    #Firstly we check the events to find if all the events we look for are present
    events_for_birth_check = []
    events_for_death_check = []
    events_for_burial_check = []
    birth_event = None
    death_event = None
    burial_event = None
    for my_event in all_events:
        #Only events with a date are relevant
        if my_event.has_date():
            if my_event.get_event_type() == "birth":
                events_for_death_check.append(my_event)
                events_for_burial_check.append(my_event)
                birth_event = my_event
            elif my_event.get_event_type() == "death":
                events_for_birth_check.append(my_event)
                events_for_burial_check.append(my_event)
                death_event = my_event
            elif my_event.get_event_type() == "burial":
                events_for_birth_check.append(my_event)
                burial_event = my_event
            else:
                events_for_death_check.append(my_event)
                events_for_birth_check.append(my_event)
    #Birth date shall be always the earliest
    if birth_event:
        for non_birth_event in events_for_birth_check:
            if not birth_event.is_this_event_earlier_or_simultaneous_to_this(non_birth_event):
                logging.error(NO_VALID_BIRTH_DATE)
                return False
    #Burial data shall be latest one
    if burial_event:
        for non_burial_event in events_for_burial_check:
            if not burial_event.is_this_event_later_or_simultaneous_to_this(non_burial_event):
                logging.error(NO_VALID_DEATH_AND_BURIAL)
                return False
    #Death data shall be greater than the following ones
    if death_event:
        for non_death_event in events_for_death_check:
            if not death_event.is_this_event_later_or_simultaneous_to_this(non_death_event):
                logging.error(NO_VALID_DEATH_DATE)
                return False
    return True
def getBestDate(date1, accuracy1, date2, accuracy2):
    '''
    This method takes 2 dates with their accuracy and returns the most probable
    date
    '''
    #TODO: we need to change the model fo the data to allow the inclusion of 2 values
    #in such case we will have the possibility of having before and after
    #Wrong accuracy provided will provide None data
    if (accuracy1 not in VALUES_ACCURACY) or (accuracy2 not in VALUES_ACCURACY):
        logging.error(NO_VALID_ACCURACY)
        return None, None
    #If we have an exact date, that's the one!
    if (accuracy1 == "EXACT"):
        return date1, accuracy1
    elif (accuracy2 == "EXACT"):
        return date2, accuracy2
    #Ok, now AFTER or BEFORE becomes more precise
    if (accuracy1 in ["BEFORE", "AFTER"]):
        return date1, accuracy1
    elif (accuracy2 in ["BEFORE", "AFTER"]):
        return date2, accuracy2
    else:
        #The only option is having 2 abouts... we get the middle value
        newyear = int((date1.year +date2.year)/2)
        return date(newyear,1,1), accuracy1
def get_formatted_location(location_string):
    '''
    This function will provide a standard location based on google maps service
    online
    '''
    #Set up first the output
    output = {}
    output["raw"] = location_string
    mapbox_results = []
    #New code moving from google maps to MapBox.
    if (get_mapbox_key() is None) or (location_string == ""):
        #Data is not found, let's try removing some
        logging.warning(NO_VALID_KEY)
        return output
    else:
        mapbox_results = Geocoder(access_token=get_mapbox_key()).forward(location_string).json()
    wrong_message = ("message" in mapbox_results.keys())
    if ( (not wrong_message) and (len(mapbox_results) > 0) and (len(mapbox_results["features"]) > 0)  and ("context" in mapbox_results["features"][0])):
        #Received data is ok, we can proceed
        output["latitude"] = mapbox_results["features"][0]["center"][1]
        output["longitude"] = mapbox_results["features"][0]["center"][0]
        for location_data in mapbox_results["features"][0]["context"]:
            if "locality" in location_data["id"]: output["city"] = location_data["text"]
            elif "place" in location_data["id"]: output["place_name"] = location_data["text"]
            elif "region" in location_data["id"]: output["county"] =  location_data["text"]
            elif "country" in location_data["id"]: output["country"] = location_data["text"]
        #In the MapBox API apparently the more accurate location is at the beginning, to make sure overwrites any other
        place_type = mapbox_results["features"][0]["place_type"]
        place_text =  mapbox_results["features"][0]["text"]
        if (place_type[0] in MAPBOX_TRANS_GENITOOLS.keys()):
            output[MAPBOX_TRANS_GENITOOLS[place_type[0]]] = place_text
        return output
    else:
        #Data is not found, let's try removing some
        logging.debug(NO_VALID_LOCATION)
        logging.debug(location_string)
        if (len(location_string.split(",")) > 3):
            output2 = get_formatted_location(",".join(location_string.split(",")[1:]))
            output2["raw"] = output["raw"]
            return output2
        else:
            return output
def get_partner_gender(gender):
    '''
    Simple function, it provides the opposite sex
    '''
    if ( gender == "M"): return "F"
    elif( gender == "F"): return "M"
    else: return None
def get_name_surname_from_complete_name(complete_name, convention="father_surname", language="en"):
    '''
    This function provides name and surname from a given name
    convention alternatives
        father_surname: the inheritated surname is only father's one
        spanish_surname: the inheritated surname is following spanish conventions including father and mother
    '''
    if convention in naming_conventions:
        name_split, data_identified = get_splitted_name_from_complete_name(complete_name, language=language)
        surnames = -1
        #We might receive a spanish surname without 2 surnames!
        if ( convention == "spanish_surname" and len(name_split) > 2): surnames = -2
        if ("S" in data_identified) and (data_identified.index("S") > 0):
            surnames_aux = data_identified.index("S") - len(data_identified)
            if surnames_aux < surnames: surnames = surnames_aux
        elif ("N" in data_identified) and (data_identified.index("N") < len(data_identified)-1):
            surnames = data_identified.index("N") + 1 - len(data_identified)
        elif ("S" in data_identified) or ("N" in data_identified):
            if data_identified[-1] in ["N", "U"]:
                surnames = 0
            elif (surnames == -2) and (data_identified[-2] in ["N", "U"]):
                surnames = -1
        if (("NS" in data_identified) or ("N" in data_identified) or ("U" in data_identified)) and (len(name_split) == 1):
            surnames = 0
        if (surnames == 0):
            name = " ".join(name_split).rstrip()
            surname = ""
        else:
            name = " ".join(name_split[:surnames]).rstrip()
            surname = " ".join(name_split[surnames:]).rstrip()
        #In the case that no name has been detected and all surnames are empty, we introduce Not Known Value
        if (len(name) == 0): name = NOT_KNOWN_VALUE
        if (len(surname) == 0): surname = NOT_KNOWN_VALUE
        return name,surname, abs(surnames)
    else: return None, None, None
def get_splitted_name_from_complete_name(complete_name, language="en", include_particle=True):
    '''
    This functions will take an string with the complete name and will
    break it into a list grouping name, surname(s).
    '''
    name_split = complete_name.rstrip().split()
    places_2_join = []
    name_category = []
    #The check of each different split is a relevant data or a particle
    for i, particle in enumerate(name_split):
        #Let's check if the particle is containing data for next
        if particle.lower() in LANGUAGES_ADDS.get(language, []) + LANGUAGES_ADDS_TITLE.get(language, []):
            if (include_particle):
                if particle.lower() in LANGUAGES_ADDS_TITLE.get(language, []):
                    #it shall be in captial letter as we are using the list of capital lettes
                    name_split[i] = particle.lower().title()
                else:
                    name_split[i] = particle.lower()
            else:
                name_split[i] = ""
            places_2_join.append(i)
            name_category.append("")
        elif (particle.lower() in LANGUAGES_NEXUS.get(language, [])) or (particle in ROMAN_NUMBERS):
            name_split[i] = ""
            places_2_join.append(i)
            name_category.append("")
        else:
            #Secure the data is correct
            name = get_compared_data_file(particle, language=language, data_kind = "name")
            surname = get_compared_data_file(particle, language=language, data_kind = "surname")
            if (name[1] + surname[1] == -2):
                #The data is not found in any of the lists
                name_split[i] = particle.lower().title()
                name_category.append("U")
            elif (name[1] > surname[1]):
                name_split[i] = name[0].rstrip()
                name_category.append("N")
            elif (surname[1] > name[1]):
                name_split[i] = surname[0].rstrip()
                name_category.append("S")
            else:
                name_split[i] = name[0].rstrip()
                name_category.append("NS")
    #name_split[i:i+2] = [" ".join(name_split[i:i+2])]
    for i in reversed(places_2_join):
        name_split[i:i+2] = [" ".join(name_split[i:i+2])]
        name_category[i:i+2] = ["".join(name_category[i:i+2])]
    return [item.strip() for item in name_split], name_category

def get_compared_data_file(data, language="en", data_kind = "surname"):
    '''
    This function will compare the given name with the current data input
    '''
    if language in LANGUAGES_FILES.keys():
        if data_kind in LANGUAGES_FILES[language].keys():
            data_in_met = adapted_doublemetaphone(data, language=language)
            total_data = []
            for word, met_value in LANGUAGES_DATA[language][data_kind].items():
                if met_value == data_in_met:
                    total_data.append(word)
            #If the value is already available, we just return it
            if data in LANGUAGES_DATA[language][data_kind].keys():
                return data, 1.0
            else:
                data_temp = data.lower()
                norm = LANGUAGES_FILES[language]["normalize"]
                for notnorm in norm.keys():
                    data_temp = data_temp.replace(notnorm, norm[notnorm])
                results = {}
                for candidate in total_data:
                    candidate_temp = candidate.lower()
                    for notnorm in norm.keys():
                        candidate_temp = candidate_temp.replace(notnorm, norm[notnorm])
                    results[candidate] = jaro(candidate_temp, data_temp)
                if (any(results)):
                    return max(results, key=results.get), max(results.values())
                else:
                    return data, -1.0
    return data, -1.0

def get_score_compare_names(name1, surname1, name2, surname2, language="en", convention="father_surname"):
    '''
    This function compares 2 names and provides an score value and a factor of the
    relative value obtained
    Surname shall be in the form of string.
    '''
    splitted_name1 = get_splitted_name_from_complete_name(name1, language=language, include_particle=False)
    splitted_name2 = get_splitted_name_from_complete_name(name2, language=language, include_particle=False)
    splitted_surname1 = get_splitted_name_from_complete_name(surname1, language=language, include_particle=False)
    splitted_surname2 = get_splitted_name_from_complete_name(surname2, language=language, include_particle=False)
    met_name1 = adapted_doublemetaphone(splitted_name1[0], language=language)
    met_name2 = adapted_doublemetaphone(splitted_name2[0], language=language)
    met_surname1 = adapted_doublemetaphone(splitted_surname1[0], language=language)
    met_surname2 = adapted_doublemetaphone(splitted_surname2[0], language=language)
    #Let's calculate the factors
    factor1 = score_of_given_name_and_meta(met_name1, met_name2, splitted_name1[0][0], splitted_name2[0][0])
    score1 = factor1
    #In case there is a not known value, we simply ignore the data, by not giving score
    if (NOT_KNOWN_VALUE == name1) and (NOT_KNOWN_VALUE == name2 ):
        factor1 = 1
        score1 = 1
    elif (NOT_KNOWN_VALUE in [name1, name2]):
        factor1 = 1
        score1 = 0
    #In the specific case of Spanish surnames and having different number of surnames we only check the first one
    #This will improve the result in case the first name will be the same and will reduce dramatically in case are different
    if (len(met_surname1) != len(met_surname2)) and language == "es":
        minimal = min(len(met_surname1) , len(met_surname2))
        met_surname1 = met_surname1[0:minimal]
        met_surname2 = met_surname2[0:minimal]
    #We make a difference with spanish language, as we might have 2 surnames, making things easier for comparison
    score_met = 0
    factor_met = 0
    if ((len(met_surname1) == 4) and (len(met_surname2) == 4) and language=="es"):
        factor_sub1 = score_of_given_name_and_meta(met_surname1[0:2], met_surname2[0:2], splitted_surname1[0][0], splitted_surname2[0][0],factor=0.95)
        factor_sub2 = score_of_given_name_and_meta(met_surname1[2:], met_surname2[2:], splitted_surname1[0][1], splitted_surname2[0][1],factor=0.95)
        score_met = 2*(score1 +factor_sub1+factor_sub2)
        factor_met = factor1*factor_sub1*factor_sub2
    else:
        factor2 = get_jaro_to_list(met_surname1, met_surname2, factor=0.95)
        score2 = factor2
        #In the case of having a not known value, we ignore this step
        if (NOT_KNOWN_VALUE in [surname1, surname2]):
            score2 = 0
            factor2 = 1
        score_met = 2*(score1 +score2)
        factor_met = factor1*factor2
    return score_met, factor_met
def score_of_given_name_and_meta(first4jaro, list4jaro, name1, name2, factor = 0.9):
    '''
    This function will take the maximum score between the direct comparison of the name and the phonetic comparison
    '''
    #Jaro is creating odd situations with names which are very different in length, with this modification, we penalize lenght differences a lot
    len_factor = (abs((len(name1) - len(name2)))/max(len(name1), len(name2)))
    score_compare = jaro(name1, name2)
    score_met = get_jaro_to_list(first4jaro, list4jaro, factor = factor)
    if (len_factor < 0.33) or (1-len_factor)*(1-len_factor) > max(score_met, score_compare*score_compare):
        return max(score_met, score_compare*score_compare)
    #We undo only in case this new scoring is more negative
    else: return (1-len_factor)*(1-len_factor)
def get_jaro_to_list(first4jaro, list4jaro, factor = 0.9):
    result = [[0 for x in range(len(list4jaro))] for y in range(len(first4jaro))]
    loc_data = 0.0
    #If loc_data =0, we take the first one
    loc_i = 0
    loc_j = 0
    for i,item in enumerate(first4jaro):
        for j,data in enumerate(list4jaro):
            if (item[1] == "") or (data[1] == ""):
                result[i][j] =  jaro(item[0],data[0])
            else:
                result[i][j] =jaro(item[0],data[0])*jaro(item[1],data[1])
            if result[i][j]  > loc_data:
                loc_data = result[i][j]
                loc_i = i
                loc_j = j
    first2return = first4jaro[:loc_i] + first4jaro[loc_i+1 :]
    list4return = list4jaro[:loc_j] + list4jaro[loc_j+1 :]
    if (len(first2return) == 0 ) or (len(list4return) == 0 ):
        dif=abs(len(first2return) - len(list4return))
        return loc_data*loc_data*math.pow(factor, dif)
    else:
        return loc_data*loc_data*get_jaro_to_list(first2return, list4return)
def score_factor_diff_decay(diff):
    '''
    This function is an intermediate function used for the decay of an specific data and the impact on the score
    '''
    if (diff == 0):
        return 2.0, 1.0
    elif (diff < 5):
        return 1.5+0.10*(5 - diff), 0.75+0.05*(5 - diff)
    elif (diff <30):
        return 1.0+ 0.02*(30-diff), 0.5 + 0.01*(30-diff)
    else:
        return 30.0/diff, 15.0/diff
def get_score_compare_dates(event1, event2):
    '''
    Get an score comparing 2 dates including accuracy
    '''
    diff= event1.get_difference_in_days(event2)
    accuracy1 = event1.get_accuracy()
    accuracy2 = event2.get_accuracy()
    if (accuracy1 == "EXACT") and (accuracy2 == "EXACT"):
        if (not event1.get_month()) or (not event2.get_month()):
            diff = diff / 360
            if diff > 2: diff = diff*diff
        elif (not event1.get_day()) or (not event2.get_day()):
            diff = diff / 30
            if diff > 2: diff = diff*diff
        return score_factor_diff_decay(diff)
    elif ("EXACT" in [accuracy1, accuracy2]) and ("ABOUT" in [accuracy1, accuracy2]):
        if (diff < 360):
            return 1.0, 1.0
        elif (diff <720):
            return 1.0- 0.25*(diff-360)/360, 1.0
        elif (diff <1440):
            return 0.75 -0.5*(diff-720)/720, 1.0 -0.5*(diff-720)/720
        else:
            return 0.25*math.pow(1440/diff,2), 0.5*math.pow(1440/diff,2)
    elif ( ("BETWEEN" in [accuracy1, accuracy2]) and ( ("EXACT" in [accuracy1, accuracy2]) or ("ABOUT" in [accuracy1, accuracy2]) )):
        if accuracy1 in ["EXACT", "ABOUT"]:
            event_exact = event1
            event_between = event2
        else:
            event_exact = event2
            event_between = event1
        is_about = False
        if "ABOUT" in [accuracy1, accuracy2]: is_about = True
        #Too early... the dates do not match!
        if (not is_about) and (not  event_exact.is_this_event_later_or_simultaneous_to_this(event_between)): return 0.0, 0.0
        #The date provided is actually later that the range provided
        elif (not is_about) and is_this_date_earlier_or_simultaneous_to_this(event_between.get_year_end(), event_between.get_month_end(),
                            event_between.get_day_end(), event_exact.get_year(), event_exact.get_month(), event_exact.get_day()):
            return 0.0, 0.0
        elif not is_about:
            range_bet = event_between.get_range_in_between()
            return output_with_range(range_bet)
        else:
            range_bet = event_between.get_range_in_between()
            _, factor_temp = score_factor_diff_decay(diff/(360))
            score, factor = output_with_range(range_bet)
            return score, factor*factor_temp*factor_temp
    elif (accuracy1 == "ABOUT") and (accuracy2 == "ABOUT"):
        diff_years= abs((event1.get_year()-event2.get_year()))
        if (diff_years < 2):
            return 1.0, 1.0
        elif (diff_years < 5):
            return 0.5, 0.7 + (5-diff_years)/10
        elif (diff_years < 10):
            return 0.2 + 0.06*(10 - diff_years), 0.3 + 0.04*(10 -diff_years)
        else:
            return 20/(diff_years*diff_years), 30/(diff_years*diff_years)
    elif (accuracy1 == "BEFORE"):
        new_event = copy.copy(event2)
        #In the case of about we need to be careful and provide a margin of 10 years
        if accuracy2 == "ABOUT": new_event.set_year(event2.get_year() - 10)
        if (accuracy2 == "BEFORE") : return 0.0, 1.0
        elif (new_event.is_this_event_earlier_or_simultaneous_to_this(event1)): return 0.0, 1.0
        else: return 0.0, 0.0
    elif (accuracy1 == "AFTER"):
        if (accuracy2 == "AFTER") : return 0.0, 1.0
        elif ( (accuracy2 == "BETWEEN") and ( is_this_date_earlier_or_simultaneous_to_this(event1.get_year(), event1.get_month(), event1.get_day(),
                            event2.get_year_end(), event2.get_month_end(), event2.get_day_end() )) ):
            return 0.0, 1.0
        elif (event2.is_this_event_later_or_simultaneous_to_this(event1)): return 0.0, 1.0
        else: return 0.0, 0.0
    elif (accuracy2 == "BEFORE"):
        new_event = copy.copy(event1)
        #In the case of about we need to be careful and provide a margin of 10 years
        if accuracy1 == "ABOUT": new_event.set_year(event1.get_year() - 10)
        if (new_event.is_this_event_earlier_or_simultaneous_to_this(event2)): return 0.0, 1.0
        else: return 0.0, 0.0
    elif (accuracy2 == "AFTER"):
        if ( (accuracy1 == "BETWEEN") and is_this_date_earlier_or_simultaneous_to_this(event2.get_year(), event2.get_month(), event2.get_day(),
                                event1.get_year_end(), event1.get_month_end(), event1.get_day_end())   ):
            return 0.0, 1.0
        if (event2.is_this_event_earlier_or_simultaneous_to_this(event1)): return 0.0, 1.0
        else: return 0.0, 0.0
    elif (accuracy1 == "BETWEEN") and (accuracy2 == "BETWEEN"):
        #Ok, now both are accuracy BETWEEN
        if is_this_date_earlier_or_simultaneous_to_this(event1.get_year_end(), event1.get_month_end(), event1.get_day_end(),
                            event2.get_year(), event2.get_month(), event2.get_day()):
            return 0.0, 0.0
        elif is_this_date_earlier_or_simultaneous_to_this(event2.get_year_end(), event2.get_month_end(), event2.get_day_end(),
                            event1.get_year(), event1.get_month(), event1.get_day()):
            return 0.0, 0.0
        else:
            range_bet = event1.get_range_in_between() + event2.get_range_in_between()
            return output_with_range(range_bet)
def output_with_range(range_date):
    '''
    Avoiding duplication inside functinos
    '''
    if range_date < 365: return 1.2, 1.0
    elif range_date < 730: return 1.0, 1.0
    elif range_date < 1800: return 0.5, 1.0
    elif range_date < 3650: return 0.2 + 0.06*(10 - range_date/365), 1.0
    else: return (0.2*3650*3650)/(range_date*range_date), 1.0
def get_location_standard(location):
    '''
    This function will provide a standarized comman separated location value
    location: is an standard dict with the information of country , city and state
    .
    output: an string as standard in several genealogical tools separated by commas
    '''
    result = ""
    for keys_data in ["city", "county", "state", "country"]:
        value = location.get(keys_data, None)
        if value:
            if result == "":
                result = value
            else:
                result += ", " + value
    return result
def formated_year(year, accuracy):
    '''
    This function will create a standard formated year
    '''
    if (accuracy == "EXACT"): return str(year)
    elif (accuracy in ["ABOUT", "BETWEEN"]): return "ca " + str(year)
    elif (accuracy == "AFTER"): return "aft. " + str(year)
    elif (accuracy == "BEFORE"): return "bef. " + str(year)
def is_this_date_earlier_or_simultaneous_to_this(year, month, day, year_other, month_other, day_other):
        '''
        Confirms if the following date is earlier or at the same time as the other
        '''
        date_self = None
        date_other = None
        if year: date_self = date(year, month if month else 1  ,day if day else 1)
        if year_other: date_other = date(year_other, month_other if month_other else 12  ,
                    day_other if day_other else (MONTH_DAYS[month_other] if month_other else 31))
        if (date_self and date_other):
            return date_self <= date_other
        elif date_self: return True
        elif date_other: return False
        else: return None
def is_this_date_later_or_simultaneous_to_this(year, month, day, year_other, month_other, day_other):
        '''
        Confirms if the following date is later or at the same time as the other
        '''
        date_self = None
        date_other = None
        if year: date_self = date(year, month if month else 12  ,day if day else (MONTH_DAYS[month] if month else 31))
        if year_other: date_other = date(year_other, month_other if month_other else 1  ,
                    day_other if day_other else 1)
        if (date_self and date_other):
            return date_self >= date_other
        elif date_self: return True
        elif date_other: return False
        else: return None
def score_factor_birth_and_death(event_earliest, event_latest, events):
    '''
    This method will provide score and factor for data contained in the profile
    '''
    if event_earliest and event_earliest.get_year():
        for event in events:
            if event.get_year():
                accepted_delta = 0
                #With events where only the year is provided we accept uncertainty of 1 year
                if event_earliest.is_only_year_available(): accepted_delta += 1
                if event.is_only_year_available(): accepted_delta += 1
                delta_years =  event.get_year() - event_earliest.get_year()
                #Logic for the checking
                both_exact = (event.get_accuracy() == "EXACT") and (event_earliest.get_accuracy() == "EXACT")
                before_in_earliest = (event_earliest.get_accuracy() == "BEFORE") and (event.get_accuracy() == "EXACT") and (event.get_event_type() == "birth")
                before_in_event = (event_earliest.get_accuracy() == "EXACT") and (event.get_accuracy() == "BEFORE") and (event_earliest.get_event_type() == "birth")
                logic_about = False
                if (event.get_accuracy() == "ABOUT") and (event_earliest.get_accuracy() == "ABOUT"):
                    logic_about = True
                    accepted_delta = 20
                elif (event.get_accuracy() == "ABOUT") and (event_earliest.get_accuracy() in ["BEFORE", "EXACT"]) and (event.get_event_type() == "birth"):
                    logic_about = True
                    accepted_delta = 10
                elif   (event_earliest.get_accuracy() == "ABOUT") and (event.get_accuracy() in ["BEFORE", "EXACT"]) and (event_earliest.get_event_type() == "birth"):
                    logic_about = True
                    accepted_delta = 10
                logic_check = both_exact or before_in_earliest or before_in_event or logic_about
                if event.get_year() and(delta_years > MAXIMUM_LIFESPAN):
                    return 0.0, 0.0
                #If the event_birth is actually a birth and the other event is before that date, for sure, we have a problem :)
                elif logic_check and (event_earliest.get_event_type() == "birth") and delta_years < -accepted_delta : return 0.0, 0.0
                elif logic_check and (event.get_event_type() == "birth") and delta_years > accepted_delta: return 0.0, 0.0
    if event_latest and event_latest.get_year():
        for event in events:
            if event.get_year():
                accepted_delta = 0
                #With events where only the year is provided we accept uncertainty of 1 year
                if event_latest.is_only_year_available(): accepted_delta += 1
                if event.is_only_year_available(): accepted_delta += 1
                #As we are looking for the latest year, ideally is negative
                delta_years =  event.get_year() - event_latest.get_year()
                both_exact = (event.get_accuracy() == "EXACT") and (event_latest.get_accuracy() == "EXACT")
                #Intermediate variable to identify if being into burial and death
                event_types = [event_latest.get_event_type(), event.get_event_type()]
                #When events are burial and death we might have significant differences, some burials are having significant differences
                if (event_types == ["burial", "death"] or event_types == ["death", "burial"]): pass
                elif event.get_year() and(delta_years > MAXIMUM_LIFESPAN):
                    return 0.0, 0.0
                #If the event_birth is actually a death and the other event is after that date, for sure, we have a problem :)
                elif both_exact and (event_latest.get_event_type() in ["death", "burial"]) and delta_years > accepted_delta : return 0.0, 0.0
                elif both_exact and (event.get_event_type()  in ["death", "burial"]) and delta_years < -accepted_delta: return 0.0, 0.0
    return 0, 1
#====================================================================================
#Execution of module code
#====================================================================================
for language in LANGUAGES_FILES.keys():
    if language not in LANGUAGES_DATA.keys(): LANGUAGES_DATA[language] = {}
    for data_kind in LANGUAGES_FILES[language].keys():
        if data_kind != "normalize":
            if data_kind not in LANGUAGES_DATA[language].keys(): LANGUAGES_DATA[language][data_kind] = {}
            file2use = os.path.join(DATA_FOLDER, LANGUAGES_FILES[language][data_kind])
            openedfile = open(file2use, "r", encoding = "ISO-8859-1")
            total_data = []
            for line_file in openedfile:
                value = line_file.replace("\n", "").rstrip()
                met_changed = adapted_doublemetaphone(value, language=language)
                LANGUAGES_DATA[language][data_kind][value] =  met_changed