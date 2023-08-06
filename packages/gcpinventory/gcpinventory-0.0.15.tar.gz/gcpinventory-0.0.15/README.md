# Resources Inventory

**This is not an official Google product.**


This is a package that can provide inventory of resources in GCP
In addition to accessing projects,zones and disks.

The package can be installed by `pip install gcpinventory'

    
    def list_zones(self, project):
        List the zones for the given project
        
        Args:
            project: The project id
        
        Yields:
             The zones for this project
        
        Raises:
            InventoryServiceException: An exception occurred
       
        # https://developers.google.com/resources/api-libraries/documentation/compute/v1/python/latest/compute_v1.zones.html#list



    def list_projects(self):
       List the projects that the user has access to.

             Yields:
                  The zones for this project

             Raises:
                 InventoryServiceException: An  exception occurred
      
        # https://developers.google.com/resources/api-libraries/documentation/cloudresourcemanager/v1/python/latest/cloudresourcemanager_v1.projects.html#list
        
        
    def list_disks(self, project, zone):
        List the disks for the given project and zone.

            Args:
                project: The project id
                zone: The zone id

            Yields:
                 The disks for this project

            Raises:
                InventoryServiceException: An exception occurred
        
        # https://developers.google.com/resources/api-libraries/documentation/compute/v1/python/latest/compute_v1.disks.html#list
        
     def list_routes(self, project):
        List the routes for the given project and zone.

            Args:
                project: The project id

            Yields:
                 The routes for this project

            Raises:
                InventoryServiceException: An exception occurred
        
        #https://developers.google.com/resources/api-libraries/documentation/compute/v1/python/latest/compute_v1.routes.html
        
     def create_route(self, project, name, priority, network, destination_range, next_hop_gateway):
        Create the routes.

            Args:
                project: The project id
                name: The name of the route
                priority: The priority for the route (integer)
                network: The network for this route (FQDN)
                destination_range: The cidr that the route is applicable to
                next_hop_gateway: The next hop gateway(FQDN)

            Yields:
                 The response of the created route object

            Raises:
                InventoryServiceException: An exception occurred
       
        # https://developers.google.com/resources/api-libraries/documentation/compute/v1/python/latest/compute_v1.routes.html
        
        
    def delete_route(self, project, route):
        Delete the routes.

            Args:
                project: The project id
                route: The route name to delete
            Raises:
                InventoryServiceException: An exception occurred
       
        # https://developers.google.com/resources/api-libraries/documentation/compute/v1/python/latest/compute_v1.routes.html       

    def swap_disks(self, project, primary_instance, primary_zone, standby_instance, standby_zone, user, key_filename,
                   ip_selector=""".[]| select(.name=="nic0")|.accessConfigs[].natIP""",
                   max_attach_retries=10
                   ):
        """Attach(force attach) the disk to the instance

             Args:
                 project: The project id
                 primary_instance: The primary_instance
                 primary_zone: the primary_zone
                 standby_instance : standby_instance
                 standby_zone : standby_zone
                 user: user to ssh in as
                 key_filename: the key file for the user

             Returns:

             Raises:
                    InventoryServiceException: An exception occurred

            Flow:
            1. Identify the Primary region
            2. Get all regional disks for primary region and keep in "regional_disk" set
               This is needed as there is no tag in the instance that identifies a disk as regional
            3. Get the attatched disk for the primary instance. Skip all the boot and  zonal disks
            4. Force attach to standby instance
            5. ssh into standby instance
            6. mount the drive

            Note that the disk attach expects the device names to be provided as per
            https://medium.com/@DazWilkin/compute-engine-identifying-your-devices-aeae6c01a4d7

            The disks will be mounted at /mnt/disks/<device-name>
        """


### API Usage
Example:

    from gcpinventory import gcpinventory as inventory_service    
    import logging
    logger = logging.getLogger()
    logging.basicConfig()
    logger.setLevel(logging.INFO)
    
    inventory_service = inventory_service.InventoryService()
                                   
     inventory_service.list_projects()


## Helpful links

  -  https://cloud.google.com/compute/docs/tutorials/python-guide
  -  https://github.com/google/google-api-python-client
  -  https://developers.google.com/resources/api-libraries/documentation/cloudresourcemanager/v1/python/latest/cloudresourcemanager_v1.projects.html#list
  -  https://developers.google.com/resources/api-libraries/documentation/compute/v1/python/latest/compute_v1.disks.html#list
  -  https://developers.google.com/resources/api-libraries/documentation/compute/v1/python/latest/compute_v1.zones.html#list
  -  https://developers.google.com/resources/api-libraries/documentation/compute/v1/python/latest/compute_v1.routes.html

