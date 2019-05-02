import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Register from "./components/register/Register.js";
import Login from "./components/LoginForm/LoginForm.js";
import YoutubePlayer from "./components/YoutubePlayer/YoutubePlayer.js";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.js";
import TermsOfService from "./components/TermsOfService/TermsOfService.js";
import SignOut from './components/SignOut/SignOut.js'
import Browser from './components/Browser/Browser.js';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1> Welcome to Music Finder</h1>

          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/player" component={YoutubePlayer} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/termsofservice" component={TermsOfService} />
          <Route path="/signout" component={SignOut} />
        </header>
      </div>
    </Router>
  );
}
export default App;
