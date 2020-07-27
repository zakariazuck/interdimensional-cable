import React from "react";
import store from './store/Store';
import "./App.css";
import Main from "./containers/Main";

import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

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