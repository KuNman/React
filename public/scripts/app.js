'use strict';

console.log("App.js is running");
var appRoot = document.getElementById('app');

//JSX
var app = {
  title: '1st React app',
  subtitle: 'subtitle',
  options: []
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

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.inputs.value;

  if (option) {
    app.options.push(option);
    e.target.elements.inputs.value = '';
    renderTemplate();
  }
};

var clearOptions = function clearOptions() {

  if (app.options.length >= 1) {
    app.options = [];
    renderTemplate();
  }
};

var renderTemplate = function renderTemplate() {
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
      app.options.length
    ) : React.createElement(
      'h3',
      null,
      'No options'
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'inputs', required: true }),
      React.createElement(
        'button',
        null,
        ' Add option'
      )
    ),
    React.createElement(
      'button',
      { onClick: clearOptions },
      'Wipe array'
    )
  );
  ReactDOM.render(template, appRoot);
};

renderTemplate();
