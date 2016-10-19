const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const express = require('express');
const morgan = require('morgan');
const config = require('./environment');

module.exports = app => {
  app.set('ip', config.ip);
  app.set('port', config.port);
  app.set('clientPath', `${app.get('clientPath')}/client`);
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(app.get('clientPath')));

  if(app.get('env') === 'development' || app.get('test') === 'test') {
    app.use(require('errorhandler')());
  }
};
