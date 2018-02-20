console.log("App.js is running");

//JSX
var app = {
    title: '1st React app',
    subtitle: 'subtitle'
};

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
  </div>
);

var userName = 'Michael';
var templateTwo = (
  <div>
    <h1>{userName}</h1>
    <p>Age: 99</p>
    <p>Location : Poland</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
