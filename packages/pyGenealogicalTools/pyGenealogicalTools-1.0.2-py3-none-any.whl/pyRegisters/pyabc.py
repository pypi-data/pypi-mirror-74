'''
Created on 3 abr. 2018

@author: Val
'''
from html.parser import HTMLParser
import requests
import unicodedata
from pyGenealogy.gen_utils import get_name_surname_from_complete_name
from pyGenealogy.common_profile import gen_profile
from pyRegisters.pyCommonRegisters import BaseRegister
#First dead record in ABC
FIRST_YEAR = 2002


BASE_ABC_NAME = "http://www.abc.es/esquelas/buscar-esquela.asp?nombre="
BASE_ABC_SURNAME = "&apellidos="
BASE_ABC_END = "&d1=dd&m1=mm&y1=aaaa&d2=dd&m2=mm&y2=aaaa"

class abc_reader(BaseRegister):
    '''
    This uses the records of the obituary located in ABC newspaper
    '''


    def __init__(self, language = "en", name_convention= "father_surname"):
        '''
        Constructor
        '''
        self.parser = ABCParser()
        self.language = language
        self.name_convention = name_convention
        BaseRegister.__init__(self, "ABC", first_year = FIRST_YEAR)
    def profile_is_matched(self, profile):
        '''
        This function will look in ABC obituary trying to match a profile
        Input shall be a profile of common profile values
        '''
        #Accents are not accepted by the webpage url call, they shall be removed prior to reading
        name = unicodedata.normalize('NFD', profile.getName()).encode('ascii', 'ignore').decode('ascii')
        surname = unicodedata.normalize('NFD', profile.getSurname()).encode('ascii', 'ignore').decode('ascii')
        #Let's create now the url for the search call
        url = BASE_ABC_NAME + name.strip().replace(" ", "+")
        url += BASE_ABC_SURNAME + surname.strip().replace(" ", "+") + BASE_ABC_END
        final_profiles = []
        if self.continue_death_register(profile):
            data = requests.get(url)
            self.parser.feed(data.text)
            for deceased in self.parser.records:
                score, factor = deceased.comparison_score(profile, data_language=self.language, name_convention=self.name_convention)
                if (score*factor > 2.0):
                    #We add the url used
                    deceased.setWebReference(url)
                    final_profiles.append(deceased)
        #If we do not execute, we also answer with not registers, we are not executing as not relevant.
        return final_profiles
class ABCParser(HTMLParser):
    '''
    This function will parser an specific individual to extract specific data useful for comparison
    '''
    def __init__(self):
        '''
        Contructor of the ABC reader
        '''
        HTMLParser.__init__(self)
        self.records = []
        self.inname = False
    def handle_starttag(self, tag, attrs):
        if (tag == "div"):
            for attr in attrs:
                if ("float:left;width:560px" in attr): self.inname = True
    def handle_data(self, data):
        if self.inname:
            self.inname = False
            name,surname, _ = get_name_surname_from_complete_name(data, convention="spanish_surname", language="es")
            profile = gen_profile(name, surname)
            self.records.append(profile)
    def handle_endtag(self, tag):
        pass  