# data-catalog-doccano-api

Wrapper for Doccano API. Uses HTTPS requests to put and fetch texts to and from
doccano.

## Use

### Initiation
````python
from data_catalog_doccano_api import DoccanoApi
url = "some_doccano_url"
username = "username"
password = "password"
doccano_api = DoccanoApi(username, password, url)
````

### Projects
To list all available projects for the user:
```python
doccano_api.get_projects()
```
Returns a list of project names and ids.

### Get labeled texts
To get labeled texts by project id:
```python
project_id = 1
doccano_api.get_texts(project_id)
```
Returns a list of text with labels.

### Put texts
To put texts to project:
```python
project_id = 1
text = "some_text.txt"
doccano_api.get_texts(project_id, text)
```
text parameter can be string or path to a plain .txt file.

### Labels
To get labels in project:
```python
project_id = 1
doccano_api.get_labels(project_id)
```
Return a list of labels with text and id.



