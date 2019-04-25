import React from 'react';
import './App.css';
import { Route,} from 'react-router-dom';
import Register from './components/register/Register.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to Music Finder</h1>
        <Route path ='/api/register' component = {Register} />
      </header>
    </div>
  );
}

export default App;
