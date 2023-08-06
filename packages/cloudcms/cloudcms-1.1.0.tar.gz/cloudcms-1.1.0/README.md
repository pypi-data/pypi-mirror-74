# Cloud CMS Python Driver

Basic driver for the [Cloud CMS](https://www.cloudcms.com) API

Runs with Python 3

Currently supports the following functionality:
- Connect to and refresh access tokens with the API
- Read platform, branch, and repositories
- Read, query, search, create, update, and delete nodes

## Installation

`pip install cloudcms`

## Examples

Below are some examples of how you might use this driver:

```python
from cloudcms import CloudCMS

# Connect to Cloud CMS
client = CloudCMS()
platform = client.connect(filename='gitana.json')

# List repositories
repositories = platform.list_repositories()

# Read repository
repository = platform.read_repository('<repository_id>')

# List branches
branches = repository.list_branches()

# Read branch
branch = repository.read_branch('<branch_id>')

# Read Node
node = branch.read_node('<node_id>')

# Create node
obj = {
    'title': 'Twelfth Night',
    'description': 'An old play'
}
newNode = branch.create_node(obj)

# Query nodes
query = {
    '_type': 'store:book'
}
pagination = {
    'limit': 2
}
queried_nodes = branch.query_nodes(query, pagination)

# Search/Find nodes
find = {
    'search': 'Shakespeare',
    'query': {
        '_type': 'store:book'
    }
}
searched_nodes = branch.find_nodes(find)
```

## Tests

To perform the unit tests for this driver, ensure that you have a `gitana.json` file in the driver directory, then run:

```
python -m unittest tests
```

## Resources

* Cloud CMS: https://www.cloudcms.com
* Github: https://github.com/gitana/cloudcms-python-driver
* Python Driver Download: https://pypi.org/project/cloudcms/
* Cloud CMS Documentation: https://www.cloudcms.com/documentation.html
* Developers Guide: https://www.cloudcms.com/developers.html

## Support

For information or questions about the Python Driver, please contact Cloud CMS
at [support@cloudcms.com](mailto:support@cloudcms.com).