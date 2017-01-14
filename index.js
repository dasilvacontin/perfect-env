module.exports = {
  env: new Proxy(process.env, {
    get: function (env, key) {
      const value = env[key]
      if (value == null) {
        throw new Error('\'' + key + '\' environment variable is not set.')
      }
      return value
    }
  })
}
