perfect.env
==============

[![Build Status](https://travis-ci.org/dasilvacontin/perfect-env.svg?branch=master)](https://travis-ci.org/dasilvacontin/perfect-env)
[![Coverage Status](https://coveralls.io/repos/github/dasilvacontin/perfect-env/badge.svg?branch=master)](https://coveralls.io/github/dasilvacontin/perfect-env?branch=master)

Drop-in replacement for `process.env` that throws an `Error` if an unset environment variable is accessed.

```js
const perfect = require('perfect-env')

const { PORT, CONSUMER_KEY, CONSUMER_SECRET, APP_URL } = perfect.env
```

instead of

```js
const { PORT, CONSUMER_KEY, CONSUMER_SECRET, APP_URL } = process.env

if (PORT == null) throw new Error('\'PORT\' environment variable is not set.')
if (CONSUMER_KEY == null) throw new Error('\'CONSUMER_KEY\' environment variable is not set.')
if (CONSUMER_SECRET == null) throw new Error('\'CONSUMER_SECRET\' environment variable is not set.')
if (APP_URL == null) throw new Error('\'APP_URL\' environment variable is not set.')
```

### Exception example:

```sh
Error: 'PORT' environment variable is not set.
    at Object.get (your-project-path/node_modules/perfect-env/index.js:6:15)
    at Object.<anonymous> (your-project-path/index.js:3:9)
```

## License

MIT © [David da Silva]

[David da Silva]: https://dasilvacont.in
