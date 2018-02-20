"use strict";

console.log("App.js is running");

//JSX
var template = React.createElement(
  "h1",
  null,
  "JSX app.js --watch"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
