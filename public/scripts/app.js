'use strict';

console.log("App.js is running");

//JSX
var app = {
  title: '1st React app',
  subtitle: 'subtitle',
  options: ['One', 'Two']
};

function getSubtitle(subtitle) {
  if (subtitle) {
    return React.createElement(
      'p',
      null,
      subtitle
    );
  }
}

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  getSubtitle(app.subtitle),
  app.options.length > 0 ? React.createElement(
    'p',
    null,
    app.options
  ) : React.createElement(
    'h3',
    null,
    'No options'
  )
);

var userName = 'Michael';
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    userName
  ),
  React.createElement(
    'p',
    null,
    'Age: 99'
  ),
  React.createElement(
    'p',
    null,
    'Location : Poland'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
