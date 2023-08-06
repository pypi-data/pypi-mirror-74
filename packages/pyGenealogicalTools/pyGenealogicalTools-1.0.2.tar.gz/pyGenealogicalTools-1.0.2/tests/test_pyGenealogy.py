'''
Created on 13 ago. 2017

@author: Val
'''
import unittest
from datetime import date
from pyGenealogy.common_profile import gen_profile
from pyGenealogy.common_event import event_profile
from tests.FIXTURES import ACTUAL_NAME, FATHER_SURNAME, GENERIC_PLACE_STRING, GENERIC_PLACE_WITH_PLACE


class Test(unittest.TestCase):


    def test_introducing_gender_living(self):
        '''
        Testing right introduction of gender and living in common_profile
        '''
        profile = gen_profile(ACTUAL_NAME, FATHER_SURNAME)
        assert(profile.setCheckedGender("F"))
        assert(profile.setCheckedGender("M"))
        assert(profile.setCheckedGender("U"))
        assert(profile.gen_data["name_to_show"] == ACTUAL_NAME + " " + FATHER_SURNAME)
        self.assertFalse(profile.setCheckedGender("J"))
        profile.setLiving(True)
        assert(profile.getLiving())
    
    def test_merge_profile(self):
        '''
        Test merge of profiles
        '''
        profile = gen_profile("Juana", "Bargas")
        profile2 = gen_profile("Juana", "de Bargas Gómez")
        profile.add_nickname("Juana de Bargas")
        assert(profile.get_nicknames() == ["Juana de Bargas"])
        profile.setCheckedDate("birth", 2016,4,23, "EXACT")
        date1 = date(2016,1,1)
        date2 = date(2018,8,25)
        date3 = date(2018,8,27)
        profile2.setCheckedDateWithDates("birth", date1, accuracy = "ABOUT")
        profile.setCheckedDate("death", 2018,1,1, "ABOUT")
        profile2.setCheckedDate("death", 2018,8,24, "EXACT")
        profile2.setCheckedDate("baptism", 2017,1,1, "ABOUT")
        profile2.setCheckedDateWithDates("burial", date2, accuracy = "BETWEEN", date2 = date3)
        event_fail = event_profile("residence")
        event_fail.setDate(1800, 2,1)
        assert(not profile2.setNewEvent(event_fail))
        event_fail.setDate(2017, 11,1)
        assert(profile2.setNewEvent(event_fail))
        profile.setComments("comment1")
        profile2.setComments("comment2")
        profile.setWebReference("THIS")
        profile2.setWebReference("OTHER")
        profile.gen_data["birth_place"] = {}
        profile.gen_data["birth_place"]["raw"] = "a"
        profile2.setPlaces("birth", GENERIC_PLACE_WITH_PLACE)
        
        result = profile.merge_profile(profile2, language="es", convention="spanish_surname")
        
        assert(result)
        assert(profile.gen_data["name"] == "Juana")
        assert(profile.gen_data["surname"] == "de Bargas Gómez")
        assert(profile.gen_data["birth"].get_date() == date(2016,4,23))
        assert(profile.gen_data["birth"].get_accuracy() == "EXACT")
        assert(profile.gen_data["comments"] == "comment1\ncomment2")
        assert("THIS" in profile.get_all_urls() )
        assert("OTHER" in profile.get_all_urls() )
        assert(len( profile.get_all_webs()) == 2 )
        assert(profile2.get_specific_event("death").get_date() ==  date(2018,8,24))
        assert(profile2.get_specific_event("death").get_accuracy() == "EXACT")
        assert(profile2.get_specific_event("burial").get_accuracy() == "BETWEEN")
        assert(profile2.get_specific_event("burial").get_year_end() == 2018)
        assert(profile2.get_specific_event("baptism").get_date() ==  date(2017,1,1))
        assert(profile2.get_specific_event("baptism").get_accuracy() == "ABOUT")
        assert(profile2.get_specific_event("birth").get_location()["place_name"] == "Calle Nuestra Señora De Los Remedios")
        assert(profile2.get_this_profile_url() == None)
    
        profile3 = gen_profile("Juana", "Bargas")
        profile4 = gen_profile("Facundo", "Smith")
        result2 = profile3.merge_profile(profile4, language="es", convention="spanish_surname")
        self.assertFalse(result2)
    
    def test_introducing_birth_date(self):
        '''
        Testing right introduction of birth date in common_profile
        '''
        profile = gen_profile("Name", "Surname")
        assert(profile.setCheckedDate("birth", 2016, 10, 20, "EXACT"))
        assert(profile.setCheckedDate("birth", 2016, 10, 20, "BEFORE"))
        assert(profile.setCheckedDate("birth", 2016, 10, 20, "AFTER"))
        assert(profile.setCheckedDate("birth", 2016, 10, 20, "ABOUT"))
        with self.assertRaises(NameError):
                profile.setCheckedDate("birth", 2016, 10, 20, "OTHER")
        
        assert(profile.setCheckedDate("death", 2016, 12, 31))
        assert(not profile.setCheckedDate("birth", 2017,12,31))
        
    def test_introducing_death_date(self):
        '''
        Testing introduction of several death dates and the logic
        '''
        profile = gen_profile("Name", "Surname")
        
        
        assert(profile.setCheckedDate("death", 2017, 12, 31, "EXACT"))
        assert(profile.setCheckedDate("death", 2017, 12, 31, "BEFORE"))
        assert(profile.setCheckedDate("death", 2017, 12, 31, "AFTER"))
        assert(profile.setCheckedDate("death", 2017, 12, 31, "ABOUT"))
        with self.assertRaises(NameError):
            profile.setCheckedDate("death", 2017, 12, 31, "OTHER")
        
        assert(profile.setCheckedDate("birth", 2016, 10, 20))
        assert(not profile.setCheckedDate("death", 2015, 12 ,31))
    def test_introduce_baptism_date(self):
        '''
        Testing introduction of baptism date
        '''
        profile = gen_profile("Name", "Surname")
        assert(profile.setCheckedDate("birth", 2016,10, 20))
        assert(profile.setCheckedDate("death", 2019,12, 31))
        assert(profile.setCheckedDate("baptism", 2016,12, 31))
        #Checking the function earliest date.
        assert(profile.get_earliest_event() == date(2016,10, 20))
        
        assert(not profile.setCheckedDate("baptism", 2015,12, 31))
        assert(not profile.setCheckedDate("baptism", 2020,12, 31))
        
        with self.assertRaises(NameError):
            profile.setCheckedDate("baptism", 2016,12, 31,"OTHER")
    
    def test_introduce_burial_date(self):
        '''
        Testing introduction of baptism date
        '''
        profile = gen_profile("Name", "Surname")
        assert(profile.setCheckedDate("birth", 2016,10, 20))
        assert(profile.setCheckedDate("death", 2019,12, 29))
        assert(profile.setCheckedDate("burial", 2019,12, 31))
        
        assert(not profile.setCheckedDate("burial", 2015,12, 31))
        #Notice that will be ok to introudce a very late burial date
        assert(profile.setCheckedDate("burial", 2020,12, 31))
        with self.assertRaises(NameError):
            profile.setCheckedDate("burial", 2019,12, 31,"OTHER")
     
    def test_introduce_residence_date(self):
        '''
        Testing introduction of residence date
        '''
        profile = gen_profile("Name", "Surname")
        assert(profile.setCheckedDate("birth", 2016,10, 20))
        assert(profile.setCheckedDate("death",2019,12, 31))
        assert(profile.setCheckedDate("residence",2016,12, 31))
        
        assert(not profile.setCheckedDate("residence",2015,12, 31))
        assert(not profile.setCheckedDate("residence",2020,12, 31))
        with self.assertRaises(NameError):
            profile.setCheckedDate("burial",2016,12, 31,"OTHER")
    def test_wrong_input(self):
        '''
        Test wrong input date class
        '''
        birth_date = date(2016,10, 20)
        profile = gen_profile("Name", "Surname")
        with self.assertRaises(NameError):
            profile.setCheckedDate("no_valid_date",birth_date)
        
    def test_accuracy_in_dates(self):
        '''
        Testing the accuracy as introduced in dates
        '''
        profile = gen_profile("Name", "Surname")
        assert(profile.setCheckedDate("birth", 2016,10, 20))
        assert(profile.setCheckedDate("residence", 2016, accuracy="ABOUT"))
        profile2 = gen_profile("Name", "Surname")
        assert(profile2.setCheckedDate("birth", 2016,10, 20))
        assert(profile2.setCheckedDate("death", 2016,12, 31))
        assert(profile2.setCheckedDate("residence", 2016, accuracy="ABOUT"))
  
    def test_burial_date_earlier_than_death_date(self):
        '''
        Test burial date before death date is wrong
        '''
        profile = gen_profile("Name", "Surname")
        assert(profile.setCheckedDate("death", 2016,10, 20))
        self.assertFalse(profile.setCheckedDate("burial", 2016,10, 19))
    
    def test_event_places(self):
        '''
        Test introduction of places
        '''
        profile = gen_profile("Name", "Surname")
        
        with self.assertRaises(NameError):
            profile.setPlaces("notvalid", GENERIC_PLACE_STRING) 
        assert(profile.setPlaces("birth", GENERIC_PLACE_STRING))
        self.assertFalse("death" in profile.gen_data.keys())
        assert("birth" in profile.gen_data.keys())
        
        #Test wrong introduction of a place to be used in google places.
        assert(profile.setPlaces("marriage", ""))
           
        
    def test_other_functions(self):
        '''
        Testing of other functions in common profile
        '''
        profile = gen_profile("Name", "Surname")
        profile.returnFullName()
        profile.setComments("TEST COMMENT")
        profile.set_surname("TEST SURNAME")
        assert(profile.gen_data["name_to_show"] == profile.nameLifespan())
    
    def test_web_reference_adding(self):
        '''
        Testing adding and updating web reference
        '''
        profile = gen_profile("Name", "Surname")
        profile.setWebReference("Myaddress")
        #Wrong declaration in the past created issues
        assert(len(profile.gen_data["web_ref"]) == 1)
        profile.setWebReference(["Myaddress2"])
        #This will check the data types is working
        assert(len(profile.gen_data["web_ref"]) == 2)
        
        assert(profile.update_web_ref("Myaddress3", "NEW", "Mynote") == None)
        
        assert(profile.update_web_ref("Myaddress2", "NEW", "Mynote"))
    
    def test_comparison_profile(self):
        '''
        Test some profile comparison 
        '''
        profile = gen_profile("Name", "Surname")
        profile2 = gen_profile("Name", "Surname")
        profile3 = gen_profile("Name", "Surname")
        
        profile.setCheckedGender("M")
        profile2.setCheckedGender("M")
        
        score, factor = profile.comparison_score(profile2)
        assert(score == 4.5)
        assert(factor == 1.0)
        
        profile2.setCheckedGender("F")
        score, factor = profile.comparison_score(profile2)
        assert(score == 4.0)
        assert(factor == 0.1)
        
        profile.setCheckedDate("birth", 2012, 1, 23)
        profile2.setCheckedDate("birth", 1980, accuracy="ABOUT")
        score, factor = profile.comparison_score(profile2)
        assert(score > 4)
        assert(factor < 0.005)
        
        profile3.setCheckedDate("birth", 1800)
        score, factor = profile.comparison_score(profile3)
        assert(score)
        assert(factor == 0.0)
        
        #Testing wrong matching
        
        profile4 = gen_profile("Name", "Surname")
        profile4.setCheckedDate("residence", 1700)
        profile4.setCheckedDate("death", 1760)
        
        profile5 = gen_profile("Name", "Surname")
        profile5.setCheckedDate("baptism", 1799)
        profile5.setCheckedDate("residence", 1800)
        profile5.setCheckedDate("residence", 1860)
                
        assert(profile4.get_earliest_event_in_event_form().get_year() == 1700)
        assert(profile4.get_latest_event_in_event_form().get_year() == 1760)
        assert(profile5.get_earliest_event_in_event_form().get_year() == 1799)
        assert(profile5.get_latest_event_in_event_form().get_year() == 1860)
        score, factor = profile4.comparison_score(profile5)
        assert(score*factor == 0.0)
if __name__ == "__main__":
    #import sys;sys.argv = ['', 'Test.test_introducing_gender']
    unittest.main()