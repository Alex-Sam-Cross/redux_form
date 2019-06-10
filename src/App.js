import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import store from './store';
import Post from './components/Posts';
import PostForm from './components/Postform';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Redux React Post Form</h1>
          </header>
          <PostForm />
          <hr />
          <Post />
        </div>
      </Provider>
    );
  }
}

export default App;
