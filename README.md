ui-tags
=======

Tag manager AngularJS directive

## Requirements
- ([jQuery](http://arshaw.com/js/fullcalendar-1.5.3/fullcalendar/gcal.js))
- ([AngularJS](http://code.angularjs.org/1.0.7/angular.js))

## Examples

### Demo in `demo/index.html` folder

### Html snippet

```html
<ui-tags tag-classes="tag tag-blue" tag-input-classes="tag tag-input" tag-lightness="white" tag-input-lightness="black" class="row-fluid tags-bucket" tags="form.tags"></ui-tags>
```
### Javascript snippet
```javascript
angular.module('tagsDemoApp', ['ui.tags']);

function TagsCtrl($scope) {
  $scope.form = { tags: ['one', 'two', 'three', 'four'] };
}
```

## Testing

```bash
$ npm install
$ bower install
$ grunt
```

## License
The MIT License (MIT)

Copyright (c) 2013 João Pinto Neto

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
