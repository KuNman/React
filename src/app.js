console.log("App.js is running");

//JSX
var app = {
    title: '1st React app',
    subtitle: 'subtitle',
    options: ['One', 'Two']
};

function getSubtitle(subtitle) {
  if(subtitle) {
    return <p>{subtitle}</p>
  }
}

var template = (
  <div>
    <h1>{app.title}</h1>
    {getSubtitle(app.subtitle)}
    {app.options.length > 0 ? <p>{app.options}</p> : <h3>No options</h3>}
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
