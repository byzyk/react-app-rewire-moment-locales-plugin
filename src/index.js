const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

function rewireMomentLocalesPlugin(config, env, options = {}) {
  config.plugins = (config.plugins || []).concat([
    new MomentLocalesPlugin(options),
  ]);

  return config;
}

module.exports = rewireMomentLocalesPlugin;
