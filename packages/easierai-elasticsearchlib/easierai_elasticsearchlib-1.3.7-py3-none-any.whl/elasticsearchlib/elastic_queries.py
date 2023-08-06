#   Copyright  2020 Atos Spain SA. All rights reserved.
 
#   This file is part of EASIER AI.
 
#   EASIER AI is free software: you can redistribute it and/or modify it under the terms of Apache License, either version 2 of the License, or
#   (at your option) any later version.
 
#   THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
#   BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT,
#   IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
#   WHETHER IN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
#   OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
#   See  LICENSE file for full license information  in the project root.

# Placeholder for all the Elasticsearch queries

QUERY_ALL = {
    # '_source': ['id'],
    'query': {
        'match_all': {}
    }
}


def query_by_id(device_id):
    body = {
        'query': {
            'match': {
                'id': device_id
            }
        }
    }

    return body

def query_by_id_with_params(device_id, params_filter):
    params_filter.append({"match":{"id":device_id}})
    body = {
        'query': {
        "bool": {
            "must": 
                params_filter
            }
        }
    }

    return body


def query_by_type(type):
    body = {
        'query': {
            'match': {
                'type': type
            }
        }
    }

    return body


def query_data_history(device_id=None, gte='0', lte='now', time_index='timestamp', sort="asc"):
    body = {
        'query': {
            'bool': {
                'must': [{
                        'range': {
                            time_index: {
                                'gte': gte,
                                'lt': lte
                            }
                        }
                    }
                ]
            }
        },
        'sort': [{
            time_index: {
                'order': sort
            }
        }]
    }
    if device_id:
        body['query']['bool']['must'].append({
                    'match': {
                        'id': device_id
                    }
                })
    return body


def query_data_history_inv(device_id=None, gte='0', lte='now', time_index='timestamp'):
    body = {
        'query': {
            'bool': {
                'must': [
                    {'range': {
                        time_index: {
                            'gte': gte,
                            'lt': lte
                        }
                    }
                    }
                ]
            }
        },
        'sort': [{
            time_index: {'order': 'desc'}
        }]
    }
    if device_id:
        body['query']['bool']['must'].append({
                    'match': {
                        'id': device_id
                    }
                })
    return body

def query_last_n_by_timestamp(device_id):
     return {
        "query": {
            'bool': {
                "must": [
                    {
                        "match": {
                            "id": device_id
                        }
                    }
                ]
            }
        },
        "sort": {
            "timestamp": {
                "order": "desc",
                "mode": "max"
            }
        }
    }

def query_check_model_params(params_query):
    return {
    "query": {
        "bool": {
            "must": 
            params_query
        }
    }
}