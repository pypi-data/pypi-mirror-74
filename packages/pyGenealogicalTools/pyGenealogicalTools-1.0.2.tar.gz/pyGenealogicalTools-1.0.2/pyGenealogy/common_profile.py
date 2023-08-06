'''
Created on 13 ago. 2017

@author: Val
'''
from pyGenealogy.gen_utils import checkDateConsistency, get_score_compare_names, get_score_compare_dates, get_name_surname_from_complete_name
from pyGenealogy import VALUES_ACCURACY, EVENT_TYPE
from pyGenealogy.gen_utils import get_splitted_name_from_complete_name, LOCATION_KEYS, formated_year,score_factor_birth_and_death
from pyGenealogy.common_event import event_profile
from messages.pyGenealogymessages import INITIAL_PART_EVENT_ERROR, END_PART_EVENT_ERROR
from datetime import datetime

DATA_STRING = ["name", "surname", "name_to_show", "gender", "comments", "id", "marriage_link"]
MERGE_EVENTS = ["birth", "death", "baptism",  "burial", "marriage"]
DATA_LISTS = ["web_ref", "nicknames"]
ARRAY_EVENTS = ["marriage", "residence"]
NO_ARRAY_EVENTS = ["birth", "death", "baptism",  "burial"]


ALL_DATA = DATA_STRING + DATA_LISTS + EVENT_TYPE

class gen_profile(object):
    '''
    This class will include a single genealogical profile common for all tools,
    common information like birth dates, death dates... will be covered here.
    '''
    def __init__(self, name, surname, name2show=None, id_db=None, data_language = "en"):
        '''
        Constructor, name and surname as minimal parameters
        '''
        if not hasattr(self, "gen_data") : self.gen_data = {}
        if not self.get_id() : self.set_id(id_db)
        #Default language
        self.gen_data["main_language"] = data_language
        self.gen_data["name"] = name
        self.gen_data["surname"] = surname
        self.gen_data["name_to_show"] = self.set_name_2_show(name2show)
        self.gen_data["web_ref"] = []
        self.gen_data["nicknames"] = []
        self.gen_data["research_item"] = []
        self.gen_data["residence"] = []
        self.gen_data["marriage"] = []
        self.gen_data["access"] = True
        self.setCheckedGender("U")
    def add_nickname(self, nick_name):
        '''
        Add a nickname
        '''
        self.gen_data["nicknames"].append(nick_name)
    def returnFullName(self):
        return self.getName() + " " + self.getSurname()
    def nameLifespan(self):
        '''
        Function for printing an standard format of naming
        '''
        all_events = self.getEvents()
        dict_events = {}
        for event in all_events:
            dict_events[event.get_event_type()] = event
        year_birth = "?"
        if("birth" in dict_events.keys() and (dict_events["birth"].get_year() is not None) ):
            year_birth = formated_year(dict_events["birth"].get_year(), dict_events["birth"].get_accuracy())
        year_death = "?"
        if("death" in dict_events.keys() and (dict_events["death"].get_year() is not None)):
            year_death = formated_year(dict_events["death"].get_year(), dict_events["death"].get_accuracy())
        if (year_birth == "?") and (year_death == "?"):
            return self.getName2Show()
        else:
            return self.getName2Show() + " (" + year_birth + " - " + year_death + ")"
    def selfcheckDateConsistency(self, new_event):
        '''
        This function is a wrapper for calling the function of checking dates consistencies
        '''
        all_events = self.getEvents()
        all_events.append(new_event)
        return checkDateConsistency(all_events)
    def comparison_score(self, profile, data_language="en", name_convention="father_surname"):
        '''
        Get the score value in comparison
        '''
        score, factor = get_score_compare_names(self.getName(), self.getSurname(),
                        profile.getName(), profile.getSurname(), language=data_language, convention=name_convention)
        #We compare now all the potential names, in case that there is a different convention
        score_nicks = 0
        factor_nicks = 0
        for complete_name_self in self.get_all_names():
            name_self, surname_self, _ = get_name_surname_from_complete_name(complete_name_self, convention=name_convention, language=data_language)
            for complete_name_other in profile.get_all_names():
                name_other, surname_other, _ = get_name_surname_from_complete_name(complete_name_other, convention=name_convention, language=data_language)
                score_int, factor_int = get_score_compare_names(name_self, surname_self,
                        name_other, surname_other, language=data_language, convention=name_convention)
                #We take the bigger of the scores
                if (score_int > score_nicks) and (factor_int > factor_nicks):
                    score_nicks = score_int
                    factor_nicks = factor_int
        #We only take the new score if bigger than the previous one, but we include a penalty (we introduce preference to the score given by formal names)
        if (score_nicks > 0.999*score) and (factor_nicks > 0.999*factor) and (score_nicks*factor_nicks*0.5 > score*factor):
            score = score_nicks*0.5
            factor = factor_nicks
        #Comparing big differences in events
        score1, factor1 = score_factor_birth_and_death(self.get_earliest_event_in_event_form(), self.get_latest_event_in_event_form(), profile.getEvents())
        score2, factor2 = score_factor_birth_and_death(profile.get_earliest_event_in_event_form(),  self.get_latest_event_in_event_form(), self.getEvents())
        #In this stage we add all obtained scores and factors.
        score += score1 + score2
        factor = factor*factor1*factor2
        #Comparing gender
        if (self.getGender()) and (profile.getGender()):
            if self.getGender() == profile.getGender():
                score += 0.5
            elif (self.getGender() != "U") and (profile.getGender() != "U"):
                factor = 0.1*factor
        for event_name in MERGE_EVENTS:
            self_event = self.get_specific_event(event_name)
            other_event = profile.get_specific_event(event_name)
            if event_name == "marriage":
                if len(self_event) > 0: self_event = self_event[0]
                else: self_event = None
                if len(other_event) > 0: other_event = other_event[0]
                else: other_event = None
            if  self_event and other_event and self_event.is_any_date_available() and other_event.is_any_date_available():
                score_temp, factor_temp = get_score_compare_dates(self_event, other_event )
                if (not ((self_event.get_event_type() == "marriage") and ( factor_temp < 1.0))) and (self_event.get_event_type() != "residence"):
                    score += score_temp
                    factor = factor*factor_temp
        return score, factor
    def merge_profile(self, profile, language="en", convention="father_surname"):
        '''
        This will merge into this profile the information from the attached profile
        it will return True if information is mixed and False if merge is not DivisionImpossible
        '''
        score, factor = self.comparison_score(profile, data_language = language,  name_convention = convention)
        if (score*factor > 2.0):
            #Ok, we consider the size big enough
            for key_data in ALL_DATA:
                if(profile.gen_data.get(key_data, None) is not None):
                    #That means we have some data!, exists in the other?
                    if(self.gen_data.get(key_data, None) is None):
                        #So is a new data!
                        self.gen_data[key_data] = profile.gen_data[key_data]
                    else:
                        #We have data in both!
                        if (key_data == "name"):
                            name1 = get_splitted_name_from_complete_name(self.getName(), language=language)
                            name2 = get_splitted_name_from_complete_name(profile.getName(), language=language)
                            if (len(name2) > len(name1)): self.set_name(profile.getName())
                        elif (key_data == "surname"):
                            surname1 = get_splitted_name_from_complete_name(self.getSurname(), language=language)
                            surname2 = get_splitted_name_from_complete_name(profile.getSurname(), language=language)
                            if (len(surname2[0]) > len(surname1[0])): self.set_surname(profile.getSurname())
                        elif (key_data == "comments"):
                            self.gen_data["comments"] += "\n" + profile.gen_data["comments"]
                        elif (key_data in DATA_LISTS):
                            for info in profile.gen_data[key_data]:
                                if info not in self.gen_data[key_data] : self.gen_data[key_data].append(info)
                        elif (key_data in ARRAY_EVENTS):
                            #In this case we merge both
                            self.gen_data[key_data] += profile.gen_data[key_data]
                        elif (key_data in EVENT_TYPE):
                            #Merging the data input
                            event_new = profile.gen_data[key_data]
                            if event_new.get_accuracy() == "EXACT":
                                self.gen_data[key_data].setDate(event_new.get_year(),event_new.get_month(),event_new.get_day(),event_new.get_accuracy())
                            for key_location in LOCATION_KEYS:
                                if event_new.get_location() and (event_new.get_location().get(key_location, None) is not None):
                                    if self.gen_data[key_data].get_location() and (self.gen_data[key_data].get_location().get(key_location, None) is None):
                                        self.gen_data[key_data].setParameterInLocation(key_location, profile.gen_data[key_data][key_location])
            return True
        else:
            return False
#===============================================================================
#         SET methods: the value of the profile is modified, all profiles derived
#        should check these methods
#===============================================================================
    def set_id(self, id_profile):
        """
        Introduce an id for later on compare the data for introduction
        """
        self.gen_data["id"] = id_profile
    def set_marriage_id_link(self, id_partner):
        """
        Sets the link to the id of the partner
        """
        self.gen_data["marriage_link"] =  id_partner
    def set_name(self,name):
        '''
        Modifies name to show
        '''
        self.gen_data["name"] = name
        self.gen_data["name_to_show"] = self.set_name_2_show(None)
    def set_surname(self, surname):
        '''
        Modified name to show as well
        '''
        self.gen_data["surname"] = surname
        self.gen_data["name_to_show"] = self.set_name_2_show(None)
    def set_name_2_show(self, name2show):
        '''
        Setting the name to be shown if not existing
        '''
        if (name2show is None):
            return self.returnFullName()
        else:
            return name2show
    def setCheckedGender(self, gender):
        '''
        This function will set up the gender of the profile, only the following values
        are available:
        M = Male
        F = Female
        U = Unknown
        Returns a True if the value has been properly introduced, and False if the value
        is not correct
        '''
        if(gender == "M" or gender == "F" or gender == "U"):
            self.gen_data["gender"] = gender
            return True
        else:
            return False
    def setCheckedDate(self, event_name, year, month = None, day = None, accuracy = "EXACT", year_end = None,
                month_end = None, day_end = None):
        '''
        This function will introduce an event with the data related to the dates of the event
        '''
        if (event_name not in EVENT_TYPE) or (accuracy not in VALUES_ACCURACY):
            raise NameError(INITIAL_PART_EVENT_ERROR + event_name + " or " + accuracy + END_PART_EVENT_ERROR)
        new_event = event_profile(event_name)
        new_event.setDate(year, month, day, accuracy, year_end, month_end, day_end)
        if (not self.selfcheckDateConsistency(new_event)):
            return False
        else:
            if event_name in ARRAY_EVENTS:
                self.gen_data[event_name].append(new_event)
            elif event_name in self.gen_data.keys():
                self.gen_data[event_name].setDate(year, month, day, accuracy, year_end, month_end, day_end)
            else:
                self.gen_data[event_name] = new_event
            return True
    def setCheckedDateWithDates(self, event_name, date1, accuracy= "EXACT", date2 = None):
        '''
        This function will allow easy transition to the new function for allowing simple transfer of data with date
        function
        '''
        if date2:
            self.setCheckedDate(event_name, date1.year, month = date1.month, day = date1.day, accuracy = accuracy,
                year_end = date2.year ,month_end = date2.month, day_end = date2.day)
        else:
            self.setCheckedDate(event_name, date1.year, month = date1.month, day = date1.day, accuracy = accuracy,
                year_end = None, month_end = None, day_end = None)
    def setNewEvent(self,event):
        '''
        When the event is already available there is no need to perform the checked date, we just include the event
        '''
        if (not self.selfcheckDateConsistency(event)):
            return False
        elif event.get_event_type() in ARRAY_EVENTS:
            if event.get_event_type() in self.gen_data:
                self.gen_data[event.get_event_type()].append(event)
            else:
                self.gen_data[event.get_event_type()] = [event]
        else:
            self.gen_data[event.get_event_type()] = event
        return True
    def setComments(self, comment):
        '''
        Comments are aditive on top of the preivous one
        '''
        if ("comments" not in self.gen_data.keys()):
            self.gen_data["comments"] = ""
        self.gen_data["comments"] = self.getComments() + comment
    def setWebReference(self, url, name=None, notes=None):
        '''
        Includes web references for the profile.
        There are 2 options for introduction:
        - Introduce a list of urls. In that case only the first argument will be considered
        - Introduce a single url, with description of names and notes
        '''
        #If the introduced values is a list of url, name and notes are ignored
        if isinstance(url, list):
            for new_add in url:
                self.gen_data["web_ref"].append({"url" : new_add})
        elif isinstance(url, str):
            new_dict = {"url": url}
            if name : new_dict["name"] = name
            if notes : new_dict["notes"] = notes
            self.gen_data["web_ref"].append(new_dict)
    def setPlaces(self, event_name, location, language="en" ):
        '''
        This function will introduce the location related to each event
        '''
        if event_name in ARRAY_EVENTS:
            new_event = event_profile(event_name)
            new_event.setLocation(location, language)
            self.gen_data[event_name].append(new_event)
            return True
        if event_name in EVENT_TYPE:
            new_event = self.gen_data.get(event_name, event_profile(event_name))
            new_event.setLocation(location, language)
            self.gen_data[event_name] = new_event
            return True
        else:
            raise NameError(INITIAL_PART_EVENT_ERROR + event_name + END_PART_EVENT_ERROR)
    def setLiving(self, alive):
        '''
        We set if profile is alive or not
        '''
        self.gen_data["living"] = alive
    def set_accessible(self, accessible):
        '''
        Sets the accessibility of the profile
        '''
        self.gen_data["access"] = accessible
    def set_main_language(self, language):
        '''
        Sets the main language of the profile that can be used later on in several functions
        '''
        self.gen_data["main_language"] = language
#===============================================================================
#         GET methods: for compatibility with other profiles
#===============================================================================
    def getName(self):
        '''
        Function to get the name
        '''
        return self.gen_data["name"]
    def getSurname(self):
        '''
        Function to return the surname
        '''
        return self.gen_data["surname"]
    def getGender(self):
        '''
        Returns the gender of the profile
        '''
        if "gender" in self.gen_data:
            return self.gen_data["gender"]
        else:
            return None
    def get_nicknames(self):
        '''
        Gets the list of nicknames
        '''
        return self.gen_data["nicknames"]
    def get_all_names(self):
        '''
        Returns a list of all the names, including formal names and nicknames
        '''
        return [self.getName() + " " + self.getSurname()] + self.get_nicknames()
    def getComments(self):
        '''
        Will return the string with all comments from the profile
        '''
        return self.gen_data.get("comments", None)
    def getName2Show(self):
        '''
        Function that provides back the name to be shown
        '''
        return self.gen_data["name_to_show"]
    def getEvents(self):
        '''
        This function will provide all present events inside the profile
        '''
        all_events = []
        for event_name in EVENT_TYPE:
            if event_name in ARRAY_EVENTS: all_events += self.gen_data[event_name]
            elif event_name in self.gen_data.keys(): all_events.append(self.gen_data[event_name])
        return all_events
    def get_specific_event(self, event_name):
        '''
        It will return an specific event or None if not present
        '''
        return self.gen_data.get(event_name, None)
    def get_accuracy_event(self, event):
        '''
        It will return the accuracy of an event in the profile
        '''
        return self.get_specific_event(event).get_accuracy()
    def get_location_event(self, event):
        '''
        It will return the location of an event in the profile
        '''
        return self.get_specific_event(event).get_location()
    def get_id(self):
        """
        Returns the profile id.
        """
        return self.gen_data.get("id",None)
    def get_all_urls(self):
        '''
        This function will provide all urls registered inside the profile
        '''
        urls = {}
        for weblink in self.get_all_webs():
            urls[weblink['url']] = weblink
        return urls
    def get_all_url_names(self):
        '''
        This function will provide all registered names for the web addressed
        '''
        names = {}
        for weblink in self.get_all_webs():
            names[weblink['name']] = weblink
        return names
    def get_all_webs(self):
        '''
        This function will provide all web references
        '''
        return self.gen_data["web_ref"]
    def get_all_research_item(self):
        '''
        This function will provide all research items
        '''
        return self.gen_data["research_item"]
    def get_specific_research_log(self, item):
        '''
        This function will provide the location of the research log
        '''
        if item in self.gen_data["research_item"]:
            return self.gen_data["research_item"].index(item)
        else:
            return None
    def getLiving(self):
        '''
        Returns the living status of a profile
        If the data has not been defined, it will be given as True as more conservative
        '''
        return self.gen_data.get("living", True)
    def get_earliest_event(self):
        '''
        It will return the earliest event, of course, the birth, but it is already checked,
        for simplicity I will not consider that case
        '''
        if self.get_earliest_event_in_event_form(): return self.get_earliest_event_in_event_form().get_date()
        else: return None
    def get_earliest_event_in_event_form(self):
        '''
        It will return the earliest event, of course, the birth, but it is already checked,
        for simplicity I will not consider that case
        '''
        earliest_event = None
        for event in self.getEvents():
            #The minimum to have a date is having the year. If not, we will ignore the event
            if event.get_year():
                if (earliest_event is None) and event.get_year():
                    earliest_event = event
                elif event.is_this_event_earlier_or_simultaneous_to_this(earliest_event):
                    earliest_event = event
        return earliest_event
    def get_latest_event_in_event_form(self):
        '''
        It will return the latest event, of course, the burial or the death, but it is already checked,
        for simplicity I will not consider that case
        '''
        latest_event = None
        for event in self.getEvents():
            if (latest_event is None) and event.get_year():
                latest_event = event
            elif event.is_this_event_later_or_simultaneous_to_this(latest_event):
                latest_event = event
        return latest_event
    def get_this_profile_url(self):
        '''
        This function is a basic function created in case there is an specific web address for this
        profile. It exists for profiles like GENI and is a place holder
        If there is not url (for example local databases) it will provide a None value
        '''
        return None
    def get_accessible(self):
        '''
        Informs if the following profile is accessible
        '''
        return self.gen_data.get("access", True)
    def get_main_language(self):
        '''
        Sets the main language of the profile that can be used later on in several functions
        '''
        return self.gen_data["main_language"]
    def get_update_datetime(self):
        '''
        It will return a datetime object with the modification date. In Common profile we include today
        as modification date
        '''
        return datetime.now()
#===============================================================================
#         UPDATE methods: for compatibility with other profiles
#===============================================================================
    def update_web_ref(self, url, name = None, notes = None):
        '''
        This function will update a given web reference
        '''
        #This will mean that exists... so we can continue
        if url in self.get_all_urls().keys():
            index = list(self.get_all_urls().keys()).index(url)
            if name : self.gen_data["web_ref"][index]["name"] = name
            if notes : self.gen_data["web_ref"][index]["notes"] = notes
            return True
        else:
            return None