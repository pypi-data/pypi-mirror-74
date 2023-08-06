# Link cutter (via cutt.ly API)

> Make your link shorter!   

**requires Redis server on the local machine! (read more below)**

![PyPI](https://img.shields.io/pypi/v/linkcutter)
![GitHub issues](https://img.shields.io/github/issues/h3xi/linkcutter-py)
[![Maintainability](https://api.codeclimate.com/v1/badges/b3fa7b2cc0bde4d9306b/maintainability)](https://codeclimate.com/github/h3xi/linkcutter-py/maintainability)
![GitHub](https://img.shields.io/github/license/h3xi/linkcutter-py)

`linkcutter` shortens links using services [Cutt.ly API](https://cutt.ly/cuttly-api)

Search parameters:

- *link* - original link (`http://example.com`)
- *key* - API service key from cutt.ly (`8c20a834fa0982f435f85d937a9628da47e8f`)

Returned attributes for each link:

- *status* - status code (`7`)
- *fullLink* - original link (`http://example.com`)
- *date* - date of shortening the link (`18.07.2020`)
- *shortLink* - shortened link (`https://cutt.ly/Pah5izz`)
- *title* - website title (`Example Domain`)

## Installation

```sh
pip3 install linkcutter
```

## Usage

```python
>>> import linkcutter
>>> link = linkcutter.get_link("http://example.com")
>>> link.status
7
>>> link.title
'Example Domain'
>>> link.shortLink
'https://cutt.ly/Pah5izz'
```

## Redis server use!
**This packet requires launched Redis server!**
This is necessary to remember all the links that you shortened using this package. They can be obtained via `redis-cli` using a short link as a key (via `get`).

```sh
> get https://cutt.ly/Pah5izz
"http://example.com"
```

This function hasn't been finalized, I will try to finish it as soon as possible.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
