let config = require('./template.config');

try {
    let localConfig = require(process.cwd() + '/template.config.js');
    if (localConfig) {
      config = { ...config, ...localConfig };
    }
  } catch (error) {}

  module.exports = config;