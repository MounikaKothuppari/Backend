'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SeriesSchema = new Schema({
  Series: Array
});

module.exports = mongoose.model('Series', SeriesSchema);