angular.module('ui.tags', [])
  .directive('uiTags', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        tags: '=',
        tagClasses: '@',
        tagInputClasses: '@',
        tagLightness: '@',
        tagInputLightness: '@'
      },
      link: function (scope, elem) {
        var addFn = function (tag) {
          if (tag) {
            tag = tag.trim().replace(/\s+/, ' ');
            if (!scope.tags) {
              scope.tags = [];
            }
            scope.tags.push(tag);
            scope.new_tag = '';
          }
        };
        scope.add = addFn;
        scope.remove = function (i) {
          scope.tags.splice(i, 1);
        };
        $('input', elem).bind('keypress', function (e) {
          if (e.keyCode == 13) {
            e.preventDefault();
            var val = this.value;
            scope.$apply(function () {
              addFn(val);
            });
          }
        });
      },
      template: '<div>' +
          '<span class="{{tagClasses}}" ng-repeat="(i, tag) in tags">' +
            '{{tag}}' +
            '<a class="pull-right" ng-click="remove(i)">' +
              '<i ng-class="{\'icon-remove\': true, \'icon-white\': tagLightness == \'white\'}"></i>' +
            '</a>' +
          '</span>' +
          '<span class="{{tagInputClasses}}">' +
            '<input type="text" ng-model="new_tag" placeholder="New">' +
            '<a class="pull-right" ng-click="add(new_tag)" ng-show="new_tag">' +
              '<i ng-class="{\'icon-ok\': true, \'icon-white\': tagInputLightness == \'white\'}"></i>' +
            '</a>' +
          '</span>' +
        '</div>'
    };

  });
