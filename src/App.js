import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component { // extends the core react component, used to create a class which is a child of another class. 
  async componentDidMount() {
    // can use Axios to make request to github api
    const res = await axios.get('https://api.github.com/users')
    console.log(res.data);
  }

  render() { // a lifecycle method that runs at a certain point when component is loaded
    return (
      <div className="App">
          <Navbar />
          <div className="container">
          <Users />
          </div>
      </div>
    );
  }
}


export default App;
