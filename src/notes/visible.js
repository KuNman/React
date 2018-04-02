class Visible extends React.Component {

  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      }
    });
  }

  render() {
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide text' : 'Show Text'}
        </button>
        {this.state.visibility && (<p>Text</p>)}
      </div>
    );
  }
}

ReactDOM.render(<Visible />, document.getElementById('app'));
