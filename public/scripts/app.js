'use strict';

var appRoot = document.getElementById('app');

var visibility = false;

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggle },
      visibility ? 'Hide text' : 'Show text'
    ),
    visibility && React.createElement(
      'p',
      null,
      'Text'
    )
  );
  ReactDOM.render(template, appRoot);
};

var toggle = function toggle() {
  visibility = !visibility;
  render();
};

render();
