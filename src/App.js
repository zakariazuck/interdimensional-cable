/**import React, { Component } from "react";
import { Provider } from 'react-redux';

import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';


import MyNavbar from './containers/myNavbar/MyNavbar'

class App extends Component {
  render() {
    return (
<hi> fzvroguns</hi>
    );
  }
}

export default App;

**/

import React from "react";
import store from './store/Store';
import "./App.css";
import Main from "./containers/Main";

import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router> 
          <Main />
        </Router>
      </Provider>
    </div>
  );
}

export default App;