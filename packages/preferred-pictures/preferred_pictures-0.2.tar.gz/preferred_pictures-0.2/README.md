# Preferred.pictures Python Client Library

The [Preferred.pictures](https://preferred.pictures) Python library provides a convenient way to call the
[Preferred.pictures](https://preferred.pictures) API for applications written in Python.

## Installation

```
$ pip install preferred_pictures
```

## Usage

The package needs to be configured with your account's identity and
secret key, which is available in the Preferred.pictures interface.

```python

from preferred_pictures import Client

pp = Client("testidentity", "secret123456")
url = pp.create_choose_url(["red", "green", "blue"], "test-tournament", )

# The URL returend will appear to be something like:
#
# https://api.preferred.pictures/choose-url?choices=red%2Cgreen%2Cblue&tournament=test-tournament&expiration=1594865959&uid=184ae09f-a081-4784-9ddc-54dc18487e8f&ttl=600&identity=testidentity&signature=d5691ae9dd1a8b715504cf2fd925b6d29db8176a7d74c8e00f07fdddb70ae990
#
```

## License

This client uses the MIT license.
