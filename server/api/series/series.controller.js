'use strict';

var _ = require('lodash');
var Series = require('./series.model');

// Get list of seriess
exports.index = function(req, res) {
  Series.find(function (err, seriess) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(jsonData(seriess));
  });
};

// Get a single series
exports.show = function(req, res) {
  Series.findById(req.params.id, function (err, series) {
    if(err) { return handleError(res, err); }
    if(!series) { return res.status(404).send('Not Found'); }
    return res.json(series);
  });
};

// Creates a new series in the DB.
exports.create = function(req, res) {
  console.log(req.body);
  Series.create(req.body, function(err, series) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(jsonData(series));
  });
};

// Updates an existing series in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Series.findById(req.params.id, function (err, series) {
    if (err) { return handleError(res, err); }
    if(!series) { return res.status(404).send('Not Found'); }
    var updated = _.merge(series, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(series);
    });
  });
};

// Deletes a series from the DB.
exports.destroy = function(req, res) {
  Series.findById(req.params.id, function (err, series) {
    if(err) { return handleError(res, err); }
    if(!series) { return res.status(404).send('Not Found'); }
    series.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}