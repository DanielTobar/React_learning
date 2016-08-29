import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
  getInitialState() {
    return({
      name: "Spencer",
    })
  },
  render() {
    return (
      <div onClick={this.handleClick}>
      {this.state.name}
      </div>
    )
  },
  handleClick() {
    this.setState({
      name: "Spongebob"
    })
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
