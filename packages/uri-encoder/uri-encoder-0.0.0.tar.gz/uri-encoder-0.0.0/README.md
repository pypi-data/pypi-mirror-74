# URI.Encoder

URI.Encoder provides encode and decode and is meant for escaping uri components.  This is meant to abide by [RFC3986](https://tools.ietf.org/html/rfc3986#section-2.2).  It is not safe and does not check for valid escapes on decoding.

# Usage

```python
from URI.Encoder import encode, decode

encode("hello world!")     # hello%20world%21
decode("hello%20world%21") # hello world!
```
