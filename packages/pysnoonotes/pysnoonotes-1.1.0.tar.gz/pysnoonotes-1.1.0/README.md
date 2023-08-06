# PySnooNotes

[![PyPI](https://img.shields.io/pypi/v/pysnoonotes.svg)](https://pypi.org/project/pysnoonotes/) [![PyPI license](https://img.shields.io/pypi/l/pysnoonotes.svg)](https://github.com/mmshivesh/PySnooNotes/blob/master/LICENSE) [![Python Version](https://img.shields.io/badge/Python-%3E%3D3.6-blue)]()

Python wrapper for the Snoonotes API

## Supported Features:

1. Fetch notes for a particular user
2. Fetch Subreddit Notes - Caching implemented 
3. Add notes for a user
4. Removing usernotes for a user

## Depends On:

`requests==2.23.0`

## Usage:

### Imports

To use in your python project, use:

```python
from pysnoonotes.core import SnooNotes
```

### Sample Usage

Authenticate using a Reddit account that can add usernotes and a user_key for that account that can be generated from "https://snoonotes.com/#!/userkey". The generated key is sent via PM to your reddit account.

```python
sn = SnooNotes("username", "user_key")
```

1. Returns a dictionary with usernames and their associated usernotes:

```python
notes_for_username = sn.get_notes_for_user("username")
notes_for_usernames12 = sn.get_notes_for_user(["username1", "username2"])
```

2. Returns notes supported in that particular subreddit:

```python
subreddit_notes = sn.get_notes_for_subreddit("subreddit")
```

*NOTE*: This function caches queries using a pickle file to `./caches` directory to prevent repeated API requests. By default it automatically updates caches once a day. However, using `use_cache=False`, you can manually trigger a call that bypasses cache (this call will also update the cache)

3. Add a new usernote for the user under a subreddit with a custom note and a link to the comment/post:

```python
sn.add_note_for_user("username", "note_type_id", "subreddit", "Reason for note", "www.reddit.com/r/subreddit/123abc/.../123abc")
```

4. Delete a usernote for a given username, given a note_id.

```python
sn.delete_note_for_user("username","note_id")
```

The above is also summarized in the `sample.py` script
