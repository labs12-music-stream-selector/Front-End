import React from 'react';
import './App.css';
import { Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Register from './components/register/Register.js';
import Login from './components/LoginForm/LoginForm.js';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1> Welcome to Music Finder</h1>
          <Route path ='/register' component = {Register} />
          <Route path ='/login' component = {Login} />
        </header>
      </div>
    </Router>
  );
}
export default App;
