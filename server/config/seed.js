/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// Insert seed models below
var Series = require('../api/series/series.model');
var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

// Insert seed data below
var seriesSeed = require('../api/series/series.seed.json');
var thingSeed = require('../api/thing/thing.seed.json');

// Insert seed inserts below
Series.find({}).remove(function() {
	Series.create(seriesSeed);
});

Thing.find({}).remove(function() {
  Thing.create(thingSeed);
});