'''
Created on 27 jul. 2019

@author: Val
'''
import pyGeni as s
from pyGenealogy.common_database import gen_database
from pyGeni.profile import profile
from pyGeni.union import union
from pyGeni.immediate_family import immediate_family
from pyGeni.geniapi_common import geni_calls
import copy

class geni_database_interface(geni_calls, gen_database):
    '''
    This class is intended to act as an interface with geni database.
    '''
    def __init__(self):
        '''
        Simple constructor of the database
        '''
        #We initiate the base classes
        geni_calls.__init__(self)
        gen_database.__init__(self)
        self.equivalence = {}
        self.inmediate = {}
#===============================================================================
#         GET methods: replacing base models
#===============================================================================
    def get_db_kind(self):
        '''
        Identified of the kind of database in use
        '''
        return "GENI"
    def get_profile_by_ID(self, id_profile):
        '''
        Returns the profile by the input ID
        '''
        if not ( (id_profile in self.profiles.keys()) or (id_profile in self.equivalence.keys()) ):
            prof = profile(id_profile)
            #We use an unique id with profile in front
            self.profiles[prof.get_id()] = prof
            if id_profile != prof.get_id():
                self.equivalence[id_profile] = prof.get_id()
        if id_profile in self.profiles.keys(): return self.profiles[id_profile]
        else: return self.profiles[self.equivalence[id_profile]]
    def get_several_profile_by_ID(self, ID_array):
        '''
        Returns a dict of profiles from Geni
        ID_array is a list of profile IDs.
        '''
        input_array = ""
        if (len(ID_array) ==1): return {ID_array[0] : self.get_profile_by_ID(ID_array[0])}
        #This variable is used to check the case all profiles are already available to avoid a call
        all_profiles_existing = True
        for id_one in ID_array:
            if id_one not in self.profiles.keys(): all_profiles_existing = False
            input_array = input_array + "," + id_one
        #We have 2 options, if all profiles are existing in the interface, we do not need to do the call...
        output_array = {}
        if all_profiles_existing:
            for id_one in ID_array:
                output_array[id_one] = self.get_profile_by_ID(id_one)
        else:
            #There is a bug in the API, apparently is not working....
            DUMMY_INPUT = "profile-1"
            url = s.GENI_PLUS_PROFILES + input_array[1:]+ "," + DUMMY_INPUT + self.token_string()
            r = s.geni_request_get(url)
            data = r.json()
            for prof_data in data["results"]:
                if not ( prof_data["id"] == DUMMY_INPUT):
                    output_array[prof_data["id"]] = profile(prof_data["id"], prof_data)
        return output_array
    def get_family_by_ID(self, id_family):
        '''
        Returns the profile by the input ID
        '''
        if id_family not in self.families.keys():
            fam = union(id_family)
            self.families[id_family] = fam
        return self.families[id_family]
    def get_family_from_child(self, profile_id):
        '''
        It will return the family of a profile where is the child
        Returns the id of the family and the family object
        '''
        for family_id in self.families.keys():
            if self.families[family_id].is_child_in_family(profile_id): return family_id, self.families[family_id]
        #If we arrived here is because the family has not been found
        link_fam = self.get_families_from_profile(profile_id)
        if (link_fam and (len(link_fam.parent_union) > 0)):
            union_id = link_fam.parent_union[0].get_id()
            return union_id, self.get_family_by_ID(union_id)
        else: return None, None
    def get_all_family_ids_is_parent(self, profile_id):
        '''
        It will provide all the families where the profile is one of the parents
        '''
        link_fam = self.get_families_from_profile(profile_id)
        #In case we have an error when loading the family, we will return a none
        if link_fam is None: return None
        families = []
        for union_now in link_fam.marriage_union:
            families.append(union_now.get_id())
        return families
    def get_all_children(self, profile_id):
        '''
        It will return all the families where the profile is a parent
        '''
        link_fam = self.get_families_from_profile(self.equivalence.get(profile_id,profile_id))
        if link_fam is None: return None
        return link_fam.children
    def get_father_from_child(self, profile_id):
        '''
        It will return the father of the profile
        In the specific case of GENI, the family is not allowing us to differentiate between Father and Mother
        '''
        family = self.get_family_from_child(profile_id)[1]
        #We may get an empty family...
        if family or (family == []):
            for parent in family.get_parents():
                #We need to check each single partner to see if it is the Father or the Mother
                parent_prof = self.get_profile_by_ID(parent)
                if parent_prof.getGender() == "M":
                    return parent_prof.get_id(), parent_prof
        return None, None
    def get_mother_from_child(self, profile_id):
        '''
        It will return the mother of the profile
        In the specific case of GENI, the family is not allowing us to differentiate between Father and Mother
        '''
        family = self.get_family_from_child(profile_id)[1]
        #We may get an empty family...
        if family or (family == []):
            for parent in family.get_parents():
                #We need to check each single partner to see if it is the Father or the Mother
                parent_prof = self.get_profile_by_ID(parent)
                if parent_prof.getGender() == "F":
                    return parent_prof.get_id(), parent_prof
        return None, None
    def get_partners_from_profile(self, profile_id):
        '''
        It will return all partners associated with the profile
        '''
        partners = []
        families = self.get_all_family_ids_is_parent(profile_id)
        if families or (families == []):
            for family_id in self.get_all_family_ids_is_parent(profile_id):
                parents = self.get_family_by_ID(family_id).get_parents()
                addapted_parents = []
                #Due to bug issues in union, we will extract the actual ID.
                for parent in parents:
                    prof_parent = self.get_profile_by_ID(parent)
                    addapted_parents.append(prof_parent.get_id())
                addapted_parents.remove(profile_id)
                partners += addapted_parents
        #In case we have access issues, we will receive a None
        else: return None
        return partners
#===============================================================================
#         ADD methods: Add methods used to include a new profile and new family
#===============================================================================
    def add_parents(self, child_profile_id = None, father_profile = None, mother_profile= None, marriage_event= None):
        '''
        This function will create a new profile using the available functions inside the profile
        child_profile_id shall be a Geni id, will be handled by the code to detect the right one
        father_profile and mother_profile shall be a inherited instance of pyGenealogy.common_profile
        marriage_event shall be an event of pyGenealogy.common_event class
        '''
        father_id = None
        mother_id = None
        family_id = None
        #Firstly, let's get the profile
        child_prof = self.get_profile_by_ID(child_profile_id)
        #Depending on the situation, we will create the profile or add as a partner of the previous one
        if father_profile:
            #We firstly create the a copy, to avoid duplication
            father_geni = copy.copy(father_profile)
            father_geni.setComments("Profile added by [https://github.com/Thimxx/pyGenealogical-Tools pyGenealogicalTools]")
            profile.create_as_a_parent(father_geni, geni_input=child_prof.get_id(), type_geni="" )
            father_id = father_geni.get_id()
        if mother_profile:
            #We firstly create the a copy, to avoid duplication
            mother_geni = copy.copy(mother_profile)
            mother_geni.setComments("Profile added by [https://github.com/Thimxx/pyGenealogical-Tools pyGenealogicalTools]")
            profile.create_as_a_parent(mother_geni, geni_input=child_prof.get_id(), type_geni="" )
            mother_id = mother_geni.get_id()
        #Finally, we need to ensure that the profile has been properly updated
        self.force_update_profile(child_profile_id)
        return father_id, mother_id, family_id
    def add_partner(self, profile_id, partner_profile, marriage = None):
        '''
        Adds a partner to the profile, by firstly creating the partner and afterwards
        creating the family
        profile_id shall be the id of the profile
        partner_profile shall be the partner as a profile derived by pyGenealogy.common_profile
        marriage shall be an instance of pyGenealogy.common_event
        '''
        family_id = None
        partner_instance = copy.copy(partner_profile)
        partner_instance.setComments("Profile added by [https://github.com/Thimxx/pyGenealogical-Tools pyGenealogicalTools]")
        profile.create_as_a_partner(partner_instance, geni_input=profile_id)
        #We force the update due to the inclusion of a new profile, as adding new families
        self.force_update_profile(profile_id)
        return partner_instance.get_id(), family_id
    def add_child(self, family_id, children_profiles):
        '''
        It create a new child profile and adds to the family
        family_id shall be an id of the family
        children shall be an array of children profiles to be added
        '''
        child_ids = []
        for child in children_profiles:
            child_instance = copy.copy(child)
            child_instance.setComments("Profile added by [https://github.com/Thimxx/pyGenealogical-Tools pyGenealogicalTools]")
            profile.create_as_a_child(child_instance, union = family_id)
            child_ids.append(child_instance.get_id())
        #We update now the parents with the new child information
        new_union = union(family_id)
        for parent in new_union.get_parents():
            #Now we force the update of all parents
            self.force_update_profile(parent)
        return child_ids
    def add_child_no_family(self, profile, children_profiles):
        '''
        It create a new child profile when there is no family existing
        profile_id shall be a profile from geni database
        children shall be an array of children profiles to be added
        '''
        child_ids = []
        for child in children_profiles:
            child_instance = copy.copy(child)
            child_instance.setComments("Profile added by [https://github.com/Thimxx/pyGenealogical-Tools pyGenealogicalTools]")
            profile.create_as_a_child(child_instance, profile = profile, only_one_parent = True)
            child_ids.append(child_instance.get_id())
        #Now we force the update of the parent
        self.force_update_profile(profile.get_id())
        return child_ids
#===============================================================================
#        INTERMEDIATE methods: methods avoiding duplications
#===============================================================================
    def get_families_from_profile(self, profile_id):
        '''
        Intermediate function providing families for a profile, it will provide
        a class instance of inmmediate_family, used in Geni
        '''
        link_fam = self.inmediate.get(profile_id, immediate_family(profile_id))
        #When is not possible to access, we return None to inform of lack of access
        if link_fam.error: return None
        if link_fam not in self.inmediate.keys(): self.inmediate[profile_id] = link_fam
        return link_fam
    def force_update_profile(self, profile_id):
        '''
        It will force the update of the profile id used by functions which include
        new profiles inside database
        '''
        #Profile data is updated
        self.profiles[profile_id] = profile(profile_id)
        id_prof = self.profiles[profile_id].get_id()
        #The link to the families is updated.
        self.inmediate[id_prof] = immediate_family(id_prof)
        #Update of families of the profile
        unions = list(self.inmediate[id_prof].parent_union) + list(self.inmediate[id_prof].marriage_union)
        for union_now in unions:
            self.families[union_now.get_id()] = union(union_now.get_id())