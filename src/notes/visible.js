const appRoot = document.getElementById('app');

let visibility = false;

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggle}>
            {visibility ? 'Hide text' : 'Show text'}
      </button>
      {visibility && (
        <p>Text</p>
      )}
    </div>
  )
  ReactDOM.render(template, appRoot);
}

const toggle = () => {
  visibility = !visibility;
  render();
};



render();
