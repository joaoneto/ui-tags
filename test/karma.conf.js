basePath = '..';
autoWatch = true;
singleRun = false;
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'bower_components/jquery/jquery.js',
  'bower_components/angular/angular.js',
  'bower_components/angular-mocks/angular-mocks.js',
  'src/angular-ui-tags.js',
  'test/tags.js',
];
browsers = ['PhantomJS'];
reporters = ['progress', 'dots'];
colors = true;