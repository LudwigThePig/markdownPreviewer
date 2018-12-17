import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
}


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
      <div id='editor-a'>
        <textarea id="editor" value={this.props.markdown} onChange={this.props.handleChange} spellcheck="false"></textarea>
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
      <div id='preview' dangerouslySetInnerHTML={{__html: marked(this.props.markdown, )}} />
    )
  }
}

const placeholder = `
# TODO: Add a compelling placeholder

[compelling idea](https://dictionary.cambridge.org/dictionary/english/compelling)

## Your ideas can look like this:
1. idea
1. idea
1. ikea
1. idea

### or like this...
this is \`inline code\` 

this is a code block

\`\`\`javascript
while(i !== 'idea'){
  console.log('We need an idea!');
}
\`\`\`

>The first Apple was just a culmination of my whole life.

The Woz

![ideaman](https://cnet2.cbsistatic.com/img/NYn58XCSVhK54AlJHwNmVgrfL6I=/570x0/2010/04/23/29f88fdd-fdb4-11e2-8c7c-d4ae52e62bcc/wozGRAY.jpg)
now **THAT** is an idea man!
  `

export default App;

//(H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.