# react-app-rewire-moment-locales-plugin

> Add [`moment-locales-webpack-plugin`](https://github.com/iamakulov/moment-locales-webpack-plugin) to [`react-app-rewired`](https://github.com/timarney/react-app-rewired) config.

## Install

```sh
npm install --save-dev react-app-rewire-moment-locales-plugin
```

## Usage

```js
const rewireMomentLocalesPlugin = require('react-app-rewire-moment-locales-plugin')

module.exports = function override(config, env) {
  // ...

  if (env === 'production') {
    config = rewireMomentLocalesPlugin(config, env, {
      localesToKeep: ['es-us', 'ru'] // optional
    })
  }

  return config
}
```

## License

MIT © [Bohdan Khodakivskyi](https://bohdan-khodakivskyi.com)
