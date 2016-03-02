/**
 * Main application routes
 */

'use strict';

var errors = require('./api/errors'),
    path = require('path');

module.exports =  function(app) {
  // Insert routes below

//will need to set up authentication later
  //app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to 404
  app.route('/*')
    .get(errors[404]);
}