class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Action/>
        <Options/>
        <AddOption/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options here
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        Option
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <button>Add option</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
