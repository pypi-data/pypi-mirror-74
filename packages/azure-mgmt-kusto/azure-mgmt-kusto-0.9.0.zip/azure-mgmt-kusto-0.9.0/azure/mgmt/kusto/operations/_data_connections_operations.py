# coding=utf-8
# --------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See License.txt in the project root for
# license information.
#
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

import uuid
from msrest.pipeline import ClientRawResponse
from msrestazure.azure_exceptions import CloudError
from msrest.polling import LROPoller, NoPolling
from msrestazure.polling.arm_polling import ARMPolling

from .. import models


class DataConnectionsOperations(object):
    """DataConnectionsOperations operations.

    You should not instantiate directly this class, but create a Client instance that will create it for you and attach it as attribute.

    :param client: Client for service requests.
    :param config: Configuration of service client.
    :param serializer: An object model serializer.
    :param deserializer: An object model deserializer.
    :ivar api_version: Client API Version. Constant value: "2020-06-14".
    """

    models = models

    def __init__(self, client, config, serializer, deserializer):

        self._client = client
        self._serialize = serializer
        self._deserialize = deserializer
        self.api_version = "2020-06-14"

        self.config = config

    def list_by_database(
            self, resource_group_name, cluster_name, database_name, custom_headers=None, raw=False, **operation_config):
        """Returns the list of data connections of the given Kusto database.

        :param resource_group_name: The name of the resource group containing
         the Kusto cluster.
        :type resource_group_name: str
        :param cluster_name: The name of the Kusto cluster.
        :type cluster_name: str
        :param database_name: The name of the database in the Kusto cluster.
        :type database_name: str
        :param dict custom_headers: headers that will be added to the request
        :param bool raw: returns the direct response alongside the
         deserialized response
        :param operation_config: :ref:`Operation configuration
         overrides<msrest:optionsforoperations>`.
        :return: An iterator like instance of DataConnection
        :rtype:
         ~azure.mgmt.kusto.models.DataConnectionPaged[~azure.mgmt.kusto.models.DataConnection]
        :raises: :class:`CloudError<msrestazure.azure_exceptions.CloudError>`
        """
        def prepare_request(next_link=None):
            if not next_link:
                # Construct URL
                url = self.list_by_database.metadata['url']
                path_format_arguments = {
                    'resourceGroupName': self._serialize.url("resource_group_name", resource_group_name, 'str'),
                    'clusterName': self._serialize.url("cluster_name", cluster_name, 'str'),
                    'databaseName': self._serialize.url("database_name", database_name, 'str'),
                    'subscriptionId': self._serialize.url("self.config.subscription_id", self.config.subscription_id, 'str')
                }
                url = self._client.format_url(url, **path_format_arguments)

                # Construct parameters
                query_parameters = {}
                query_parameters['api-version'] = self._serialize.query("self.api_version", self.api_version, 'str')

            else:
                url = next_link
                query_parameters = {}

            # Construct headers
            header_parameters = {}
            header_parameters['Accept'] = 'application/json'
            if self.config.generate_client_request_id:
                header_parameters['x-ms-client-request-id'] = str(uuid.uuid1())
            if custom_headers:
                header_parameters.update(custom_headers)
            if self.config.accept_language is not None:
                header_parameters['accept-language'] = self._serialize.header("self.config.accept_language", self.config.accept_language, 'str')

            # Construct and send request
            request = self._client.get(url, query_parameters, header_parameters)
            return request

        def internal_paging(next_link=None):
            request = prepare_request(next_link)

            response = self._client.send(request, stream=False, **operation_config)

            if response.status_code not in [200]:
                exp = CloudError(response)
                exp.request_id = response.headers.get('x-ms-request-id')
                raise exp

            return response

        # Deserialize response
        header_dict = None
        if raw:
            header_dict = {}
        deserialized = models.DataConnectionPaged(internal_paging, self._deserialize.dependencies, header_dict)

        return deserialized
    list_by_database.metadata = {'url': '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections'}


    def _data_connection_validation_method_initial(
            self, resource_group_name, cluster_name, database_name, data_connection_name=None, properties=None, custom_headers=None, raw=False, **operation_config):
        parameters = models.DataConnectionValidation(data_connection_name=data_connection_name, properties=properties)

        # Construct URL
        url = self.data_connection_validation_method.metadata['url']
        path_format_arguments = {
            'resourceGroupName': self._serialize.url("resource_group_name", resource_group_name, 'str'),
            'clusterName': self._serialize.url("cluster_name", cluster_name, 'str'),
            'databaseName': self._serialize.url("database_name", database_name, 'str'),
            'subscriptionId': self._serialize.url("self.config.subscription_id", self.config.subscription_id, 'str')
        }
        url = self._client.format_url(url, **path_format_arguments)

        # Construct parameters
        query_parameters = {}
        query_parameters['api-version'] = self._serialize.query("self.api_version", self.api_version, 'str')

        # Construct headers
        header_parameters = {}
        header_parameters['Accept'] = 'application/json'
        header_parameters['Content-Type'] = 'application/json; charset=utf-8'
        if self.config.generate_client_request_id:
            header_parameters['x-ms-client-request-id'] = str(uuid.uuid1())
        if custom_headers:
            header_parameters.update(custom_headers)
        if self.config.accept_language is not None:
            header_parameters['accept-language'] = self._serialize.header("self.config.accept_language", self.config.accept_language, 'str')

        # Construct body
        body_content = self._serialize.body(parameters, 'DataConnectionValidation')

        # Construct and send request
        request = self._client.post(url, query_parameters, header_parameters, body_content)
        response = self._client.send(request, stream=False, **operation_config)

        if response.status_code not in [200, 202]:
            exp = CloudError(response)
            exp.request_id = response.headers.get('x-ms-request-id')
            raise exp

        deserialized = None

        if response.status_code == 200:
            deserialized = self._deserialize('DataConnectionValidationListResult', response)

        if raw:
            client_raw_response = ClientRawResponse(deserialized, response)
            return client_raw_response

        return deserialized

    def data_connection_validation_method(
            self, resource_group_name, cluster_name, database_name, data_connection_name=None, properties=None, custom_headers=None, raw=False, polling=True, **operation_config):
        """Checks that the data connection parameters are valid.

        :param resource_group_name: The name of the resource group containing
         the Kusto cluster.
        :type resource_group_name: str
        :param cluster_name: The name of the Kusto cluster.
        :type cluster_name: str
        :param database_name: The name of the database in the Kusto cluster.
        :type database_name: str
        :param data_connection_name: The name of the data connection.
        :type data_connection_name: str
        :param properties: The data connection properties to validate.
        :type properties: ~azure.mgmt.kusto.models.DataConnection
        :param dict custom_headers: headers that will be added to the request
        :param bool raw: The poller return type is ClientRawResponse, the
         direct response alongside the deserialized response
        :param polling: True for ARMPolling, False for no polling, or a
         polling object for personal polling strategy
        :return: An instance of LROPoller that returns
         DataConnectionValidationListResult or
         ClientRawResponse<DataConnectionValidationListResult> if raw==True
        :rtype:
         ~msrestazure.azure_operation.AzureOperationPoller[~azure.mgmt.kusto.models.DataConnectionValidationListResult]
         or
         ~msrestazure.azure_operation.AzureOperationPoller[~msrest.pipeline.ClientRawResponse[~azure.mgmt.kusto.models.DataConnectionValidationListResult]]
        :raises: :class:`CloudError<msrestazure.azure_exceptions.CloudError>`
        """
        raw_result = self._data_connection_validation_method_initial(
            resource_group_name=resource_group_name,
            cluster_name=cluster_name,
            database_name=database_name,
            data_connection_name=data_connection_name,
            properties=properties,
            custom_headers=custom_headers,
            raw=True,
            **operation_config
        )

        def get_long_running_output(response):
            deserialized = self._deserialize('DataConnectionValidationListResult', response)

            if raw:
                client_raw_response = ClientRawResponse(deserialized, response)
                return client_raw_response

            return deserialized

        lro_delay = operation_config.get(
            'long_running_operation_timeout',
            self.config.long_running_operation_timeout)
        if polling is True: polling_method = ARMPolling(lro_delay, lro_options={'final-state-via': 'location'}, **operation_config)
        elif polling is False: polling_method = NoPolling()
        else: polling_method = polling
        return LROPoller(self._client, raw_result, get_long_running_output, polling_method)
    data_connection_validation_method.metadata = {'url': '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnectionValidation'}

    def check_name_availability(
            self, resource_group_name, cluster_name, database_name, name, custom_headers=None, raw=False, **operation_config):
        """Checks that the data connection name is valid and is not already in
        use.

        :param resource_group_name: The name of the resource group containing
         the Kusto cluster.
        :type resource_group_name: str
        :param cluster_name: The name of the Kusto cluster.
        :type cluster_name: str
        :param database_name: The name of the database in the Kusto cluster.
        :type database_name: str
        :param name: Data Connection name.
        :type name: str
        :param dict custom_headers: headers that will be added to the request
        :param bool raw: returns the direct response alongside the
         deserialized response
        :param operation_config: :ref:`Operation configuration
         overrides<msrest:optionsforoperations>`.
        :return: CheckNameResult or ClientRawResponse if raw=true
        :rtype: ~azure.mgmt.kusto.models.CheckNameResult or
         ~msrest.pipeline.ClientRawResponse
        :raises: :class:`CloudError<msrestazure.azure_exceptions.CloudError>`
        """
        data_connection_name = models.DataConnectionCheckNameRequest(name=name)

        # Construct URL
        url = self.check_name_availability.metadata['url']
        path_format_arguments = {
            'resourceGroupName': self._serialize.url("resource_group_name", resource_group_name, 'str'),
            'clusterName': self._serialize.url("cluster_name", cluster_name, 'str'),
            'databaseName': self._serialize.url("database_name", database_name, 'str'),
            'subscriptionId': self._serialize.url("self.config.subscription_id", self.config.subscription_id, 'str')
        }
        url = self._client.format_url(url, **path_format_arguments)

        # Construct parameters
        query_parameters = {}
        query_parameters['api-version'] = self._serialize.query("self.api_version", self.api_version, 'str')

        # Construct headers
        header_parameters = {}
        header_parameters['Accept'] = 'application/json'
        header_parameters['Content-Type'] = 'application/json; charset=utf-8'
        if self.config.generate_client_request_id:
            header_parameters['x-ms-client-request-id'] = str(uuid.uuid1())
        if custom_headers:
            header_parameters.update(custom_headers)
        if self.config.accept_language is not None:
            header_parameters['accept-language'] = self._serialize.header("self.config.accept_language", self.config.accept_language, 'str')

        # Construct body
        body_content = self._serialize.body(data_connection_name, 'DataConnectionCheckNameRequest')

        # Construct and send request
        request = self._client.post(url, query_parameters, header_parameters, body_content)
        response = self._client.send(request, stream=False, **operation_config)

        if response.status_code not in [200]:
            exp = CloudError(response)
            exp.request_id = response.headers.get('x-ms-request-id')
            raise exp

        deserialized = None
        if response.status_code == 200:
            deserialized = self._deserialize('CheckNameResult', response)

        if raw:
            client_raw_response = ClientRawResponse(deserialized, response)
            return client_raw_response

        return deserialized
    check_name_availability.metadata = {'url': '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/checkNameAvailability'}

    def get(
            self, resource_group_name, cluster_name, database_name, data_connection_name, custom_headers=None, raw=False, **operation_config):
        """Returns a data connection.

        :param resource_group_name: The name of the resource group containing
         the Kusto cluster.
        :type resource_group_name: str
        :param cluster_name: The name of the Kusto cluster.
        :type cluster_name: str
        :param database_name: The name of the database in the Kusto cluster.
        :type database_name: str
        :param data_connection_name: The name of the data connection.
        :type data_connection_name: str
        :param dict custom_headers: headers that will be added to the request
        :param bool raw: returns the direct response alongside the
         deserialized response
        :param operation_config: :ref:`Operation configuration
         overrides<msrest:optionsforoperations>`.
        :return: DataConnection or ClientRawResponse if raw=true
        :rtype: ~azure.mgmt.kusto.models.DataConnection or
         ~msrest.pipeline.ClientRawResponse
        :raises: :class:`CloudError<msrestazure.azure_exceptions.CloudError>`
        """
        # Construct URL
        url = self.get.metadata['url']
        path_format_arguments = {
            'resourceGroupName': self._serialize.url("resource_group_name", resource_group_name, 'str'),
            'clusterName': self._serialize.url("cluster_name", cluster_name, 'str'),
            'databaseName': self._serialize.url("database_name", database_name, 'str'),
            'dataConnectionName': self._serialize.url("data_connection_name", data_connection_name, 'str'),
            'subscriptionId': self._serialize.url("self.config.subscription_id", self.config.subscription_id, 'str')
        }
        url = self._client.format_url(url, **path_format_arguments)

        # Construct parameters
        query_parameters = {}
        query_parameters['api-version'] = self._serialize.query("self.api_version", self.api_version, 'str')

        # Construct headers
        header_parameters = {}
        header_parameters['Accept'] = 'application/json'
        if self.config.generate_client_request_id:
            header_parameters['x-ms-client-request-id'] = str(uuid.uuid1())
        if custom_headers:
            header_parameters.update(custom_headers)
        if self.config.accept_language is not None:
            header_parameters['accept-language'] = self._serialize.header("self.config.accept_language", self.config.accept_language, 'str')

        # Construct and send request
        request = self._client.get(url, query_parameters, header_parameters)
        response = self._client.send(request, stream=False, **operation_config)

        if response.status_code not in [200]:
            exp = CloudError(response)
            exp.request_id = response.headers.get('x-ms-request-id')
            raise exp

        deserialized = None
        if response.status_code == 200:
            deserialized = self._deserialize('DataConnection', response)

        if raw:
            client_raw_response = ClientRawResponse(deserialized, response)
            return client_raw_response

        return deserialized
    get.metadata = {'url': '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName}'}


    def _create_or_update_initial(
            self, resource_group_name, cluster_name, database_name, data_connection_name, parameters, custom_headers=None, raw=False, **operation_config):
        # Construct URL
        url = self.create_or_update.metadata['url']
        path_format_arguments = {
            'resourceGroupName': self._serialize.url("resource_group_name", resource_group_name, 'str'),
            'clusterName': self._serialize.url("cluster_name", cluster_name, 'str'),
            'databaseName': self._serialize.url("database_name", database_name, 'str'),
            'dataConnectionName': self._serialize.url("data_connection_name", data_connection_name, 'str'),
            'subscriptionId': self._serialize.url("self.config.subscription_id", self.config.subscription_id, 'str')
        }
        url = self._client.format_url(url, **path_format_arguments)

        # Construct parameters
        query_parameters = {}
        query_parameters['api-version'] = self._serialize.query("self.api_version", self.api_version, 'str')

        # Construct headers
        header_parameters = {}
        header_parameters['Accept'] = 'application/json'
        header_parameters['Content-Type'] = 'application/json; charset=utf-8'
        if self.config.generate_client_request_id:
            header_parameters['x-ms-client-request-id'] = str(uuid.uuid1())
        if custom_headers:
            header_parameters.update(custom_headers)
        if self.config.accept_language is not None:
            header_parameters['accept-language'] = self._serialize.header("self.config.accept_language", self.config.accept_language, 'str')

        # Construct body
        body_content = self._serialize.body(parameters, 'DataConnection')

        # Construct and send request
        request = self._client.put(url, query_parameters, header_parameters, body_content)
        response = self._client.send(request, stream=False, **operation_config)

        if response.status_code not in [200, 201, 202]:
            exp = CloudError(response)
            exp.request_id = response.headers.get('x-ms-request-id')
            raise exp

        deserialized = None

        if response.status_code == 200:
            deserialized = self._deserialize('DataConnection', response)
        if response.status_code == 201:
            deserialized = self._deserialize('DataConnection', response)
        if response.status_code == 202:
            deserialized = self._deserialize('DataConnection', response)

        if raw:
            client_raw_response = ClientRawResponse(deserialized, response)
            return client_raw_response

        return deserialized

    def create_or_update(
            self, resource_group_name, cluster_name, database_name, data_connection_name, parameters, custom_headers=None, raw=False, polling=True, **operation_config):
        """Creates or updates a data connection.

        :param resource_group_name: The name of the resource group containing
         the Kusto cluster.
        :type resource_group_name: str
        :param cluster_name: The name of the Kusto cluster.
        :type cluster_name: str
        :param database_name: The name of the database in the Kusto cluster.
        :type database_name: str
        :param data_connection_name: The name of the data connection.
        :type data_connection_name: str
        :param parameters: The data connection parameters supplied to the
         CreateOrUpdate operation.
        :type parameters: ~azure.mgmt.kusto.models.DataConnection
        :param dict custom_headers: headers that will be added to the request
        :param bool raw: The poller return type is ClientRawResponse, the
         direct response alongside the deserialized response
        :param polling: True for ARMPolling, False for no polling, or a
         polling object for personal polling strategy
        :return: An instance of LROPoller that returns DataConnection or
         ClientRawResponse<DataConnection> if raw==True
        :rtype:
         ~msrestazure.azure_operation.AzureOperationPoller[~azure.mgmt.kusto.models.DataConnection]
         or
         ~msrestazure.azure_operation.AzureOperationPoller[~msrest.pipeline.ClientRawResponse[~azure.mgmt.kusto.models.DataConnection]]
        :raises: :class:`CloudError<msrestazure.azure_exceptions.CloudError>`
        """
        raw_result = self._create_or_update_initial(
            resource_group_name=resource_group_name,
            cluster_name=cluster_name,
            database_name=database_name,
            data_connection_name=data_connection_name,
            parameters=parameters,
            custom_headers=custom_headers,
            raw=True,
            **operation_config
        )

        def get_long_running_output(response):
            deserialized = self._deserialize('DataConnection', response)

            if raw:
                client_raw_response = ClientRawResponse(deserialized, response)
                return client_raw_response

            return deserialized

        lro_delay = operation_config.get(
            'long_running_operation_timeout',
            self.config.long_running_operation_timeout)
        if polling is True: polling_method = ARMPolling(lro_delay, **operation_config)
        elif polling is False: polling_method = NoPolling()
        else: polling_method = polling
        return LROPoller(self._client, raw_result, get_long_running_output, polling_method)
    create_or_update.metadata = {'url': '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName}'}


    def _update_initial(
            self, resource_group_name, cluster_name, database_name, data_connection_name, parameters, custom_headers=None, raw=False, **operation_config):
        # Construct URL
        url = self.update.metadata['url']
        path_format_arguments = {
            'resourceGroupName': self._serialize.url("resource_group_name", resource_group_name, 'str'),
            'clusterName': self._serialize.url("cluster_name", cluster_name, 'str'),
            'databaseName': self._serialize.url("database_name", database_name, 'str'),
            'dataConnectionName': self._serialize.url("data_connection_name", data_connection_name, 'str'),
            'subscriptionId': self._serialize.url("self.config.subscription_id", self.config.subscription_id, 'str')
        }
        url = self._client.format_url(url, **path_format_arguments)

        # Construct parameters
        query_parameters = {}
        query_parameters['api-version'] = self._serialize.query("self.api_version", self.api_version, 'str')

        # Construct headers
        header_parameters = {}
        header_parameters['Accept'] = 'application/json'
        header_parameters['Content-Type'] = 'application/json; charset=utf-8'
        if self.config.generate_client_request_id:
            header_parameters['x-ms-client-request-id'] = str(uuid.uuid1())
        if custom_headers:
            header_parameters.update(custom_headers)
        if self.config.accept_language is not None:
            header_parameters['accept-language'] = self._serialize.header("self.config.accept_language", self.config.accept_language, 'str')

        # Construct body
        body_content = self._serialize.body(parameters, 'DataConnection')

        # Construct and send request
        request = self._client.patch(url, query_parameters, header_parameters, body_content)
        response = self._client.send(request, stream=False, **operation_config)

        if response.status_code not in [200, 201, 202]:
            exp = CloudError(response)
            exp.request_id = response.headers.get('x-ms-request-id')
            raise exp

        deserialized = None

        if response.status_code == 200:
            deserialized = self._deserialize('DataConnection', response)
        if response.status_code == 201:
            deserialized = self._deserialize('DataConnection', response)
        if response.status_code == 202:
            deserialized = self._deserialize('DataConnection', response)

        if raw:
            client_raw_response = ClientRawResponse(deserialized, response)
            return client_raw_response

        return deserialized

    def update(
            self, resource_group_name, cluster_name, database_name, data_connection_name, parameters, custom_headers=None, raw=False, polling=True, **operation_config):
        """Updates a data connection.

        :param resource_group_name: The name of the resource group containing
         the Kusto cluster.
        :type resource_group_name: str
        :param cluster_name: The name of the Kusto cluster.
        :type cluster_name: str
        :param database_name: The name of the database in the Kusto cluster.
        :type database_name: str
        :param data_connection_name: The name of the data connection.
        :type data_connection_name: str
        :param parameters: The data connection parameters supplied to the
         Update operation.
        :type parameters: ~azure.mgmt.kusto.models.DataConnection
        :param dict custom_headers: headers that will be added to the request
        :param bool raw: The poller return type is ClientRawResponse, the
         direct response alongside the deserialized response
        :param polling: True for ARMPolling, False for no polling, or a
         polling object for personal polling strategy
        :return: An instance of LROPoller that returns DataConnection or
         ClientRawResponse<DataConnection> if raw==True
        :rtype:
         ~msrestazure.azure_operation.AzureOperationPoller[~azure.mgmt.kusto.models.DataConnection]
         or
         ~msrestazure.azure_operation.AzureOperationPoller[~msrest.pipeline.ClientRawResponse[~azure.mgmt.kusto.models.DataConnection]]
        :raises: :class:`CloudError<msrestazure.azure_exceptions.CloudError>`
        """
        raw_result = self._update_initial(
            resource_group_name=resource_group_name,
            cluster_name=cluster_name,
            database_name=database_name,
            data_connection_name=data_connection_name,
            parameters=parameters,
            custom_headers=custom_headers,
            raw=True,
            **operation_config
        )

        def get_long_running_output(response):
            deserialized = self._deserialize('DataConnection', response)

            if raw:
                client_raw_response = ClientRawResponse(deserialized, response)
                return client_raw_response

            return deserialized

        lro_delay = operation_config.get(
            'long_running_operation_timeout',
            self.config.long_running_operation_timeout)
        if polling is True: polling_method = ARMPolling(lro_delay, **operation_config)
        elif polling is False: polling_method = NoPolling()
        else: polling_method = polling
        return LROPoller(self._client, raw_result, get_long_running_output, polling_method)
    update.metadata = {'url': '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName}'}


    def _delete_initial(
            self, resource_group_name, cluster_name, database_name, data_connection_name, custom_headers=None, raw=False, **operation_config):
        # Construct URL
        url = self.delete.metadata['url']
        path_format_arguments = {
            'resourceGroupName': self._serialize.url("resource_group_name", resource_group_name, 'str'),
            'clusterName': self._serialize.url("cluster_name", cluster_name, 'str'),
            'databaseName': self._serialize.url("database_name", database_name, 'str'),
            'dataConnectionName': self._serialize.url("data_connection_name", data_connection_name, 'str'),
            'subscriptionId': self._serialize.url("self.config.subscription_id", self.config.subscription_id, 'str')
        }
        url = self._client.format_url(url, **path_format_arguments)

        # Construct parameters
        query_parameters = {}
        query_parameters['api-version'] = self._serialize.query("self.api_version", self.api_version, 'str')

        # Construct headers
        header_parameters = {}
        if self.config.generate_client_request_id:
            header_parameters['x-ms-client-request-id'] = str(uuid.uuid1())
        if custom_headers:
            header_parameters.update(custom_headers)
        if self.config.accept_language is not None:
            header_parameters['accept-language'] = self._serialize.header("self.config.accept_language", self.config.accept_language, 'str')

        # Construct and send request
        request = self._client.delete(url, query_parameters, header_parameters)
        response = self._client.send(request, stream=False, **operation_config)

        if response.status_code not in [200, 202, 204]:
            exp = CloudError(response)
            exp.request_id = response.headers.get('x-ms-request-id')
            raise exp

        if raw:
            client_raw_response = ClientRawResponse(None, response)
            return client_raw_response

    def delete(
            self, resource_group_name, cluster_name, database_name, data_connection_name, custom_headers=None, raw=False, polling=True, **operation_config):
        """Deletes the data connection with the given name.

        :param resource_group_name: The name of the resource group containing
         the Kusto cluster.
        :type resource_group_name: str
        :param cluster_name: The name of the Kusto cluster.
        :type cluster_name: str
        :param database_name: The name of the database in the Kusto cluster.
        :type database_name: str
        :param data_connection_name: The name of the data connection.
        :type data_connection_name: str
        :param dict custom_headers: headers that will be added to the request
        :param bool raw: The poller return type is ClientRawResponse, the
         direct response alongside the deserialized response
        :param polling: True for ARMPolling, False for no polling, or a
         polling object for personal polling strategy
        :return: An instance of LROPoller that returns None or
         ClientRawResponse<None> if raw==True
        :rtype: ~msrestazure.azure_operation.AzureOperationPoller[None] or
         ~msrestazure.azure_operation.AzureOperationPoller[~msrest.pipeline.ClientRawResponse[None]]
        :raises: :class:`CloudError<msrestazure.azure_exceptions.CloudError>`
        """
        raw_result = self._delete_initial(
            resource_group_name=resource_group_name,
            cluster_name=cluster_name,
            database_name=database_name,
            data_connection_name=data_connection_name,
            custom_headers=custom_headers,
            raw=True,
            **operation_config
        )

        def get_long_running_output(response):
            if raw:
                client_raw_response = ClientRawResponse(None, response)
                return client_raw_response

        lro_delay = operation_config.get(
            'long_running_operation_timeout',
            self.config.long_running_operation_timeout)
        if polling is True: polling_method = ARMPolling(lro_delay, **operation_config)
        elif polling is False: polling_method = NoPolling()
        else: polling_method = polling
        return LROPoller(self._client, raw_result, get_long_running_output, polling_method)
    delete.metadata = {'url': '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName}'}
