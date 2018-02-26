class App extends React.Component {
  render() {
    const title = 'App';
    const subtitle = 'Subtitle';
    const options = ['One', 'Two', 'Three'];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action/>
        <Options options={options}/>
        <AddOption/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    );
  }
}

class Action extends React.Component {
  handleChoose() {
    alert('choose');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleChoose}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    console.log(this.props.options)
  }
    render() {
      return (
        <div>
          <button onClick={this.handleRemoveAll}>Remove All</button>
          {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
         </div>
      );
    }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        Option: {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {
  handleSubmit() {
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.option.value.trim();
    if(option) {
      alert(option);
    }
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"/>
            <button>Add new option</button>
          </form>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
