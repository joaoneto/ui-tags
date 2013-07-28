angular.module('tagsDemoApp', ['ui.tags']);

function TagsCtrl($scope) {
  $scope.form = { tags: ['one', 'two', 'three', 'four'] };
}