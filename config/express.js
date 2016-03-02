/**
 * Express configuration
 */

'use strict';

var express = require('express'),
    morgan  = require('morgan'),
    bodyParser = require('body-parser'),
    path = require('path'),
    config = require('./environment'),
    passport = require('passport'),
    session = require('express-session'),
    connectMongo = require('connect-mongo'),
    mongoose = require('mongoose'),
    mongoStore = connectMongo(session);

module.exports = function(app) {
  var env = app.get('env');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(passport.initialize());

  app.set('appPath', path.join(config.root, 'client'));

  if ('production' === env) {
    app.use(express.static(app.get('appPath')));
    app.use(morgan('dev'));
  }

  if ('development' === env || 'test' === env) {
    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(app.get('appPath')));
    app.use(morgan('dev'));
  }
}