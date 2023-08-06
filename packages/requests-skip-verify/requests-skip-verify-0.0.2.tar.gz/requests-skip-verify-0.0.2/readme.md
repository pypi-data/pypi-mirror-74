# requests-skip-verify

This package can skip SSL verification for the [requests library](https://pypi.org/project/requests/) with a single command.  
Avoid SSL errors under proxies and hide warnings.

You don't need to add "verify=False" to every HTTP request anymore.

## Quickstart

Install using pip:

```
pip install requests-skip-verify
```

Disable SSL Verification:

```python
import requests
import requests_skip_verify

# Switch SSL verification
requests_skip_verify.set(True)

requests.get("https://example.com/")
```

ReEnable SSL Verification:

```python
import requests
import requests_skip_verify

# Switch SSL verification
requests_skip_verify.set(False)

requests.get("https://example.com/")
```
