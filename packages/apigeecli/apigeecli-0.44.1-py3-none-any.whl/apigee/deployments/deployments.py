import json

import requests
from tabulate import tabulate

from apigee import APIGEE_ADMIN_API_URL, auth

GET_API_PROXY_DEPLOYMENT_DETAILS_PATH = '{api_url}/v1/organizations/{org}/apis/{api_name}/deployments'


class DeploymentsSerializer:
    def serialize_details(self, deployment_details, format, showindex=False, tablefmt='plain'):
        if format == 'text':
            return deployment_details.text
        revisions = []
        for i in deployment_details.json()['environment']:
            revisions.append({'name': i['name'], 'revision': [j['name'] for j in i['revision']]})
        if format == 'json':
            return json.dumps(revisions)
        elif format == 'table':
            table = [[rev['name'], rev['revision']] for rev in revisions]
            headers = []
            if showindex == 'always' or showindex is True:
                headers = ['id', 'name', 'revision']
            elif showindex == 'never' or showindex is False:
                headers = ['name', 'revision']
            return tabulate(table, headers, showindex=showindex, tablefmt=tablefmt)
        else:
            raise ValueError(format)
        return deployment_details


class Deployments:
    def __init__(self, auth, org_name, api_name):
        self._auth = auth
        self._org_name = org_name
        self._api_name = api_name

    def __call__(self):
        pass

    @property
    def auth(self):
        return self._auth

    @auth.setter
    def auth(self, value):
        self._auth = value

    @property
    def org_name(self):
        return self._org_name

    @org_name.setter
    def org_name(self, value):
        self._org_name = value

    @property
    def api_name(self):
        return self._api_name

    @api_name.setter
    def api_name(self, value):
        self._api_name = value

    def get_api_proxy_deployment_details(self, formatted=False, format='text', showindex=False, tablefmt='plain', revision_name_only=False):
        uri = GET_API_PROXY_DEPLOYMENT_DETAILS_PATH.format(api_url=APIGEE_ADMIN_API_URL, org=self._org_name, api_name=self._api_name)
        hdrs = auth.set_header(self._auth, headers={'Accept': 'application/json'})
        resp = requests.get(uri, headers=hdrs)
        resp.raise_for_status()
        if formatted:
            if revision_name_only:
                return DeploymentsSerializer().serialize_details(resp, format, showindex=showindex, tablefmt=tablefmt)
            return DeploymentsSerializer().serialize_details(resp, 'text')
        return resp
