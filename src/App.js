import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
const axios = require('axios');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
    this.teste = this.teste.bind(ths);
  }

  getPosts = () => {
    axios.get('https://litoralmagazine.com/api/get_posts/')
    .then(res => this.setState({posts:res.data.posts}, () => console.log(this.state.posts.length)))
  }



  componentDidMount(){
    this.getPosts();
  }

  teste(){
    console.log('Isto e um teste')
  }

  render() {
    var a = 'Teste';
    return (
      <div className="App">
        <header className="App-header">
        <Navbar teste={this.teste} nome={a}/>
        <Navbar nome="outro teste"/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <h1>{this.state.posts.length}</h1>
        list for each element in this.state
        <ul>
          {this.state.posts.map(post => {
            return <div key={post.id}><li>{post.id}</li></div>
          })}
        </ul>
      </div>
    );
  }
}


export default App;
