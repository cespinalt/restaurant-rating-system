const path = require('path');
const _ = require('lodash');
const development = require('./development');

const envSettings = Object.create(null);
envSettings.development = development;

const basicSettings = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  ip: process.env.IP || '0.0.0.0',
  root: path.normalize(`${__dirname}/../../..`),
  secrets: {
    session: process.env.SESSION_SECRET || 'session-secret',
  }
};

module.exports = _.merge(basicSettings, envSettings[basicSettings.env] || {});
