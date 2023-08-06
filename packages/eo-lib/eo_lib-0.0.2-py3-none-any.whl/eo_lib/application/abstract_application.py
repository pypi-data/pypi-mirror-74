from abc import ABC
from sqlalchemy import update
from pprint import pprint
from eo_lib.model.core.models import ApplicationReference, Configuration

class AbstractApplication(ABC):

    def __init__(self, service):
        self.service = service

    def get_all (self):
        return self.service.get_all()
        
    def create(self, object):
        self.service.create (object)

    def ___retrive_by_external_id_and_seon_entity_name (self, external_id, seon_entity_name):

        if isinstance(external_id, int):
            external_id = str(external_id)

        return self.service.session.query(ApplicationReference).filter(ApplicationReference.external_id == external_id, 
                                                               ApplicationReference.entity_name == seon_entity_name).first()

    
    def ___retrive_by_external_url_and_seon_entity_name (self, external_url, seon_entity_name):
        return self.service.session.query(ApplicationReference).filter(ApplicationReference.external_url == external_url, 
                                                               ApplicationReference.entity_name == seon_entity_name).first()

    def retrive_by_external_url(self, external_url):

        application_reference = self.___retrive_by_external_url_and_seon_entity_name(external_url, self.service.type)
        if application_reference:
            return self.service.get_by_uuid(application_reference.internal_uuid)
        return None

    def retrive_by_external_uuid(self, external_uuid):
        
        if isinstance(external_uuid, int):
            external_uuid = str(external_uuid)

        application_reference = self.___retrive_by_external_id_and_seon_entity_name(external_uuid, self.service.type)
        if application_reference:
            return self.service.get_by_uuid(application_reference.internal_uuid)
        return None
    
    def ___retrive_by_external_id_and_seon_entity_name_and_configuration_uuid (self, external_id, seon_entity_name,configuration_uuid):

        if isinstance(external_id, int):
            external_id = str(external_id)
        
        if isinstance(configuration_uuid, int):
            configuration_uuid = str(configuration_uuid)
        
        configuration = self.service.session.query(Configuration).filter(Configuration.uuid == configuration_uuid).first()

        return self.service.session.query(ApplicationReference).filter(ApplicationReference.external_id == external_id, 
                                                               ApplicationReference.entity_name == seon_entity_name,
                                                               ApplicationReference.configuration == configuration.id).first()

    def retrive_by_external_uuid_and_configuration_uuid(self, external_uuid, configuration_uuid):
        
        if isinstance(external_uuid, int):
            external_uuid = str(external_uuid)
        
        if isinstance(configuration_uuid, int):
            configuration_uuid = str(configuration_uuid)
        
        application_reference = self.___retrive_by_external_id_and_seon_entity_name_and_configuration_uuid(external_uuid, self.service.type,configuration_uuid)
        if application_reference:
            return self.service.get_by_uuid(application_reference.internal_uuid)
        return None

    def update (self, object):
        self.service.update(object)
    
    def retrive_by_name (self, name):
        return self.service.retrive_by_name(name)
    
    def get_by_uuid (self, uuid):
        return self.service.get_by_uuid(uuid)
    
