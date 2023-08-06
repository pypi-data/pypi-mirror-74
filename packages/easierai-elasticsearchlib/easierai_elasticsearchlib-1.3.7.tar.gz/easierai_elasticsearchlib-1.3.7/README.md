# Elastic search wrapper for Python

This library allows access to a Elasticsearch from a Python program.

https://pypi.org/project/elasticsearchlib/


## Installation

### Command line
This library can be installed with the following command:

```
pip3 install elasticsearchlib
```
### Dockerfile

You can add these lines in your Dockerfile to include this library in your image:

```
RUN pip3 install elasticsearchlib
```

## Uploading to pip

These steps are needed to distribute the library on Pip repository manager:

### Prerequisites

First, these packages must be installed on your Python environment:

* Setuptools
* Wheel
* Twine
* Tqdm

```
sudo python -m pip install --upgrade pip setuptools wheel
sudo python -m pip install tqdm
sudo python -m pip install --user --upgrade twine
```

### Customization

On the _setup.py_ file, these fields can be customized:

* **Version**: The current version of the build.

### Execution

```
python3 setup.py bdist_wheel
```
This command will generate a _.whl_ file inside the _dist_ folder of the root of the project. Then, execute the following command to upload this file to PyPi repository:

```
python3 -m twine upload dist/*
```


## Usage
This section will explain the usage of this library.

### Constructor
```
Elasticsearchlib()
``` 

### start_connection
This function creates the connection to the elasticsearch database, checking if the server is up. Returns True if the database answered correctly.
```
def start_connection(self, host, port, request_retries=3, total_retries=9):
```
- host: Base IP address for the elasticsearch database.
- port: Port where the elasticsearch database is published.
- request_retries: number of times a request will be retried before being dropped (defaults to 3).
- total_retries: number of consecutive retries before dropping the connection and throwing an Exception (defaults to 9).

### create_index
This function checks if an index is already created and, if not, creates it, according to the provided mapping.
```
def create_index(self, index, mapping=None): 
```
- index: Name of the index to create.
- mapping: Mapping provided as the template for this index.

### add_to index 
This function adds a document to the provided index. If the index does not exist, it will be created first.
```
def add_to_index(self, index, body, id=''):
```
- index: Index where the document will be added.
- body: Body for the document.
- id: Optional argument for the document id on the database. If not provided, a random one will be created.

### search_last_n_measures
This functions allows for the retrieval of the last n measures of one dataset item.
```
def search_last_n_measures(self, index, id_dataset, n):
```
- index: Index to search in.
- id_dataset: Dataset id to retrieve the measures.
- n: Number of measures desired.

### scrolled_query
This function returns all measures stored in an index, following a query.
```
def scrolled_query(self, query, index, filter_path=None):
```
- query: Query to use on the request.
- index: Index on which to use the query.
- filter_path: Filter that can be applied to the request.

### get_entities_ids
This function returns all the entity ids stored under an index.
```
def get_entities_ids(self, index):
```
- index: Index on which to request the ids.

### get_last_document
This function returns the last document stored under an index, for a specific device_id.
```
def get_last_document(self, index, device_id):
```
- index: Index on which to request the document.
- device_id: Id of the device to query.

### get_data_history
This function returns the data history for a specific device in a period of time.
```
def get_data_history(self, index, device_id, gte, lte='now'):
```
- index: Index on which to request the data.
- device_id: Id of the device to query.
- gte: Lower bound for the time period.
- lte: Upper bound for the time period (defaults to now).