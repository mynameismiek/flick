'use strict';

var express = require('express'),
    passport = require('passport'),
    setTokenCookie = require('../auth.service').setTokenCookie;

var router = express.Router();

router
  .get('/', passport.authenticate('facebook', {
    scope: ['email', 'user_about_me'],
    session: false
  }))
  .get('/callback', passport.authenticate('facebook', {
    session: false
  }), setTokenCookie);

module.exports = router;