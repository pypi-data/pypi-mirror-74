import re
import requests

from jsonpath_ng import parse

from . utils import extract_coords


class PyLobidClient():

    """Main Class to interact with LOBID-API """

    def extract_id(self, url):
        """extracts the GND-ID from an GND-URL

        :param url: A GND-URL, e.g. http://d-nb.info/gnd/118650130
        :type url: str

        :return: The GND-ID, e.g. 118650130
        :rtype: str
        """
        try:
            gnd_id = re.findall(self.ID_PATTERN, url)[0]
        except IndexError:
            gnd_id = False
        return gnd_id

    def get_entity_lobid_url(self, url):
        """creates a lobid-entity URL from an GND-URL

        :param url: A GND-URL, e.g. http://d-nb.info/gnd/118650130
        :type url: str

        :return: A LOBID-ENTITY-URL, e.g. http://lobid.org/gnd/116000562
        :rtype: str
        """
        gnd_id = self.extract_id(url)
        if gnd_id:
            lobid_url = f"{self.BASE_URL}/{gnd_id}"
        else:
            lobid_url = False
        return lobid_url

    def get_entity_json(self, url):
        """fetches the LOBID-JSON response of a given GND-URL

        :param url: A GND_URL
        :type url: str

        :return: The matching JSON representation fetched from LOBID
        :rtype: dict
        """
        request_url = self.get_entity_lobid_url(url)
        try:
            response = requests.request("GET", request_url, headers=self.HEADERS)
        except Exception as e:
            print(f"Request to LOBID-API for GND-URL {url} failed due to Error: {e}")
            return {}
        if response.ok:
            return response.json()
        else:
            return {}

    def get_same_as(self):
        """ returns a list of alternative norm-data-ids

        :return: A list of tuples like ('GeoNames', 'http://sws.geonames.org/2782067'),
        :rtype: list
        """
        try:
            result = [(x['collection']['abbr'], x['id']) for x in self.ent_dict['sameAs']]
        except Exception as e:
            result = []
        return result

    def get_pref_name(self):
        """ returns the preferred name

        :return: The preferred Name vale, e.g. 'Assmann, Richard'
        :rtype: str
        """
        result = self.ent_dict.get('preferredName', '')
        return result

    def __str__(self):
        return self.BASE_URL

    def __init__(self):
        """__init__
        """

        self.BASE_URL = "http://lobid.org/gnd"
        self.ID_PATTERN = "([0-9]\w*-*[0-9]\w*)"
        self.coords_xpath = parse('$..hasGeometry')
        self.coords_regex = r'[+|-]\d+(?:\.\d*)?'
        self.pref_alt_names_xpath = parse('$.variantName')
        self.HEADERS = {
            'Accept': 'application/json'
        }


class PyLobidPlace(PyLobidClient):
    """ A python class representing a Person Entity """

    def __init__(self, gnd_id, fetch_related=False):
        """ initializes the class

        :param gnd_id: any kind of GND_URI/URL
        :type gnd_id: str
        :param fetch_related: should related objects be fetched
        :type fetch_related: bool

        :return: A PyLobidPlace instance
        """
        super().__init__()
        self.gnd_id = self.get_entity_lobid_url(gnd_id)
        self.ent_dict = self.get_entity_json(gnd_id)
        self.ent_type = self.ent_dict.get('type', False)
        if 'PlaceOrGeographicName' in self.ent_type:
            self.is_place = True
        else:
            self.is_place = False
        self.coords = self.get_coords()
        self.alt_names = self.get_alt_names()
        self.same_as = self.get_same_as()
        self.pref_name = self.get_pref_name()

    def get_coords_str(self):
        """get a string of coordinates

        :return: A string containing coordinates
        :rtype: str

        """
        coords_str = f"{[match.value for match in self.coords_xpath.find(self.ent_dict)]}"
        return coords_str

    def get_coords(self):
        """get a list of coordiantes

        :return: A list of longitute, latitude coords like ['+009.689780', '+051.210970']
        :rtype: list

        """
        coords_str = self.get_coords_str()
        return extract_coords(coords_str)

    def get_alt_names(self):
        """a list of alternative names

        :return: a list of alternative names
        :rtype: list

        """
        ent_dict = self.ent_dict
        try:
            result = [match.value for match in self.pref_alt_names_xpath.find(ent_dict)][0]
        except IndexError:
            result = []
        return result


class PyLobidPerson(PyLobidClient):
    """ A python class representing a Person Entity """

    def get_life_dates(self):
        """ returns birth- and death dates

        :return: A dict with keys birth_date_str and death_date_str
        :rtype: dict

        """
        try:
            birth = self.ent_dict.get('dateOfBirth', [])[0]
        except IndexError:
            birth = ''
        try:
            death = self.ent_dict.get('dateOfDeath', [])[0]
        except IndexError:
            death = ''
        return {
            "birth_date_str": birth,
            "death_date_str": death
        }

    def place_of_values(self, place_of='Birth'):
        """find values for PlaceOfBirth/Death

        :param place_of: Passed in value concatenates to 'PlaceOfBirth|Death' \
        defaults to 'Birth'
        :type place_of: str

        :return: The ID of the Place
        :rtype: str

        """
        value = f"placeOf{place_of}"
        result = self.ent_dict.get(value, False)
        if isinstance(result, list):
            return result[0]
        else:
            return {}

    def place_of_dict(self, place_of='Birth'):
        """get the LOBID-JSON of a PlaceOfBirth|Death (if present)

        :param place_of: Passed in value concatenates to 'PlaceOfBirth|Death' \
        defaults to 'Birth'
        :type place_of: str

        :return: The LOBID-JSON of the PlaceOfBirth|Death
        :rtype: dict

        """
        result = self.place_of_values(place_of)
        if result:
            place_id = result['id']
            return PyLobidPerson(place_id).ent_dict
        else:
            return {}

    def get_coords_str(self, place_of='Birth'):
        """get a string of coordinates

        :param place_of: Passed in value concatenates to 'PlaceOfBirth|Death' \
        defaults to 'Birth'
        :type place_of: str

        :return: A string containing coordinates
        :rtype: str

        """
        if place_of == "Birth":
            place_of_key = "pylobid_born"
        else:
            place_of_key = "pylobid_died"
        ent_dict = self.ent_dict.get(place_of_key, {})
        coords_str = f"{[match.value for match in self.coords_xpath.find(ent_dict)]}"
        return coords_str

    def get_coords(self, place_of='Birth'):
        """get a list of coordiantes

        :param place_of: Passed in value concatenates to 'PlaceOfBirth|Death' \
        defaults to 'Birth'
        :type place_of: str

        :return: A list of longitute, latitude coords like ['+009.689780', '+051.210970']
        :rtype: list

        """
        coords_str = self.get_coords_str(place_of=place_of)
        return extract_coords(coords_str)

    def get_place_alt_name(self, place_of='Birth'):
        """a list of alternative names

        :param place_of: Passed in value concatenates to 'PlaceOfBirth|Death' \
        defaults to 'Birth'
        :type place_of: str

        :return: a list of alternative names
        :rtype: list

        """
        if place_of == "Birth":
            place_of_key = "pylobid_born"
        else:
            place_of_key = "pylobid_died"
        ent_dict = self.ent_dict.get(place_of_key, {})
        try:
            result = [match.value for match in self.pref_alt_names_xpath.find(ent_dict)][0]
        except IndexError:
            result = []
        return result

    def __str__(self):
        return self.gnd_id

    def __init__(self, gnd_id, fetch_related=False):
        """ initializes the class

        :param gnd_id: any kind of GND_URI/URL
        :type gnd_id: str
        :param fetch_related: should related objects be fetched
        :type fetch_related: bool

        :return: A PyLobidPerson instance
        """
        super().__init__()
        self.gnd_id = self.get_entity_lobid_url(gnd_id)
        self.ent_dict = self.get_entity_json(gnd_id)
        self.ent_type = self.ent_dict.get('type', False)
        if 'Person' in self.ent_type:
            self.is_person = True
        else:
            self.is_person = False
        if self.is_person:
            self.ent_dict.update(pylobid_born={}, pylobid_died={})
        self.pref_name = self.get_pref_name()
        self.fetch_related = fetch_related
        self.pref_name_xpath = parse('$.preferredName')
        if self.fetch_related and self.is_person:
            self.ent_dict['pylobid_born'] = self.place_of_dict()
            if self.place_of_values().get('id', '') == self.place_of_values(place_of="Death").get('id', ''):
                self.ent_dict['pylobid_died'] = self.ent_dict['pylobid_born']
            else:
                self.ent_dict['pylobid_died'] = self.place_of_dict(place_of='Death')

        self.birth_place = {
            'person_id': self.gnd_id,
            'name': self.place_of_values().get('label', ''),
            'id': self.place_of_values().get('id', ''),
            'coords': self.get_coords(),
            'alt_names': self.get_place_alt_name()
        }
        self.death_place = {
            'person_id': self.gnd_id,
            'name': self.place_of_values(place_of='Death').get('label', ''),
            'id': self.place_of_values(place_of='Death').get('id', ''),
            'coords': self.get_coords(place_of='Death'),
            'alt_names': self.get_place_alt_name(place_of='Death')
        }
        self.life_span = self.get_life_dates()
        self.same_as = self.get_same_as()
