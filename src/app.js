console.log("App.js is running");

//JSX
const app = {
    title: '1st React app',
    subtitle: 'subtitle',
    options: ['One', 'Two']
};

function getSubtitle(subtitle) {
  if(subtitle) {
    return <p>{subtitle}</p>
  }
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {getSubtitle(app.subtitle)}
    {app.options.length > 0 ? <p>{app.options}</p> : <h3>No options</h3>}
  </div>
);

const userName = 'Michael';
const templateTwo = (
  <div>
    <h1>{userName}</h1>
    <p>Age: 99</p>
    <p>Location : Poland</p>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
