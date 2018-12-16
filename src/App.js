import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

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
          <Header />
          <Field markdown={this.state.textarea} handleChange={this.handleChange} />
          <Display markdown={this.state.textarea} />
      </div>
    );
  }
}

class Header extends Component {
  render(){
    return(
      <div id="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Markdown Previewer</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

class Field extends Component {
  render(){
    return(
      <div id='editor'>
        <textarea id='markdown-editor'rows="10" cols="50" value={this.props.markdown} onChange={this.props.handleChange}></textarea>
      </div>
    )
  }
}

class Display extends Component{

  render(){
    // function prep(){
    //   const markup = {marked(this.props.markdown, {sanitize:true})};
    //   return { markup}
    // }
    return(
      <div id='display' dangerouslySetInnerHTML={{__html: marked(this.props.markdown)}} />
    )
  }
}

const placeholder = `
<h1>TODO: Add a compelling placeholder</h1>
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>`

export default App;