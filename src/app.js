console.log("App.js is running");
const appRoot = document.getElementById('app');

//JSX
const app = {
    title: '1st React app',
    subtitle: 'subtitle',
    options: [],
};

function getSubtitle(subtitle) {
  if(subtitle) {
    return <p>{subtitle}</p>
  }
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.inputs.value;

  if(option) {
    app.options.push(option);
    e.target.elements.inputs.value = '';
    renderTemplate();
  }
};

const clearOptions = () => {

  if (app.options.length >= 1) {
    app.options = [];
    renderTemplate();
  }
}

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {getSubtitle(app.subtitle)}
      {app.options.length > 0 ? <p>{app.options.length}</p> : <h3>No options</h3>}
      { app.options.map((option) => {
         return <li key={option}>Option: {option}</li>;
        })
      }
      <form onSubmit={onFormSubmit}>
        <input type="text" name="inputs" required/>
        <button> Add option</button>
      </form>
      <button onClick={clearOptions}>Wipe array</button>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderTemplate();
