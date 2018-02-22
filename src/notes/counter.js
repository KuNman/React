let count = 0;
const add = () => {
  count++;
  renderTemplateThree();
}
const minus = () => {
  count--;
  renderTemplateThree();
}

const reset = () => {
  count = 0;
  renderTemplateThree();
}

const renderTemplateThree = () => {
  const templateThree = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={add}>+1</button>
      <button onClick={minus}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateThree, appRoot);
};

renderTemplateThree();
