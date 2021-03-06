  
'use strict';

// Here's a JavaScript-based config file.
// If you need conditional logic, you might want to use this type of config.
// Otherwise, JSON or YAML is recommended.

module.exports = {
  diff: true,
  extension: ['js'],
  package: './package.json',
  reporter: 'spec',
  timeout: 20000,
  ui: 'bdd',
  'watch-files': ['examples/*.js', 'test/*.js'],
};