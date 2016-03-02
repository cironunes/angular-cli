'use strict';

var path    = require('path');
var Command = require('ember-cli/lib/models/command');
var BuildTask   = require('../tasks/build');

module.exports = Command.extend({
  name: 'build',
  availableOptions: [
    { name: 'environment', type: String,  default: 'development', aliases: ['e', { 'dev': 'development' }, { 'prod': 'production' }] },
    { name: 'watch',       type: Boolean, default: false,         aliases: ['w'] }
  ],

  run: function(options) {
    var buildTask = new BuildTask({
      ui: this.ui,
      analytics: this.analytics,
      project: this.project
    });

    buildTask.run(options);
  }
});

module.exports.overrideCore = true;
