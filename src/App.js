import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import Task from './task';
import store from './store';






function App() {
  return (

    <Provider store={store}>
      <div className="App">
        <Task></Task>
      </div>
    </Provider>

  );
}

export default App;


