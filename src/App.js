import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      textarea: placeholder
    }
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({
      textarea: event.target.value
    });
  }


  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Field markdown={this.state.textarea} handleChange={this.handleChange} />
          <Display markdown={this.state.textarea} />
      </div>
    );
  }
}

class Field extends Component {
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <textarea id='markdown-editor'rows="10" cols="50" value={this.props.markdown} onChange={this.props.handleChange}></textarea>
      </div>
    )
  }
}

class Display extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
      {this.props.markdown}
      </div>
    )
  }
}

const placeholder = `<div>TODO: Add a compelling placeholder</div>`

export default App;