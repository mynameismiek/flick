/**
 * Main application file
 */

'use strict';

var express = require('express'),
    config = require('./config/environment'),
    mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
    
    // Connect to MongoDB
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

// Setup server
var app = express();

//configure express app and environment, injecting express application
require('./config/express')(app);
//add routes to express application
require('./routes')(app);

// Start server
function startServer() {
  app.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

setImmediate(startServer);

// Expose app
exports = module.exports = app;
