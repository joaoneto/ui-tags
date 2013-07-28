/*global beforeEach, afterEach, describe, it, inject, expect, module, angular, $*/
describe('uiTags', function () {
  'use strict';

  var elm, scope;

  beforeEach(module('ui.tags'));

  beforeEach(inject(function ($rootScope, $compile) {
    elm = angular.element(
        '<ui-tags ' +
          'tag-classes="tag tag-blue" ' +
          'tag-input-classes="tag tag-input" ' +
          'tag-lightness="white" ' +
          'tag-input-lightness="black" ' +
          'class="row-fluid tags-bucket" ' + 
          'tags="form.tags"></ui-tags>'
    );

    scope = $rootScope;
    $compile(elm)(scope);
    scope.$digest();
  }));

  it('should create component with initial tag input', function () {
    expect(elm.find('span.tag').length).toBe(1);
  });

  it('should create spans tags elements', function () {
    scope.$apply(function () {
      scope.form = { tags: ['one', 'two'] };
    });
    expect(scope.form).not.toBe(null);
    expect(elm.find('span.tag').length).toBe(3);
    expect(elm.find('span.tag-input').length).toBe(1);
    expect(elm.find('span.tag-blue').length).toBe(2);
  });

  it('should initialize scope.form.tags with Foo', function () {
    elm.scope().add('Foo');
    scope.$apply();
    expect(scope.form).not.toBe(null);
    expect(scope.form.tags[0]).toBe('Foo');
    expect(elm.find('span.tag').length).toBe(2);
    expect(elm.find('span.tag-input').length).toBe(1);
    expect(elm.find('span.tag-blue').length).toBe(1);
  });

  it('should remove tag Foo', function () {
    scope.$apply(function () {
      scope.form = { tags: ['one', 'Foo', 'two'] };
    });
    elm.scope().remove(1);
    scope.$apply();
    expect(scope.form).not.toBe(null);
    expect(elm.find('span.tag').length).toBe(3);
    expect(elm.find('span.tag-input').length).toBe(1);
    expect(elm.find('span.tag-blue').length).toBe(2);
    expect(scope.form.tags[0]).toBe('one');
    expect(scope.form.tags[1]).toBe('two');
  });

});