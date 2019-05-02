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
<<<<<<< HEAD
import User from './components/user/User.js'
=======
import LandingPage from './components/LandingPage/LandingPage.js';
>>>>>>> 461b3ef369d7769b4c91be29154e968e886105ce

function App() {
  return (
    <Router>
      <div className="App">
        <header className="">
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/player" component={YoutubePlayer} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/termsofservice" component={TermsOfService} />
          <Route path="/signout" component={SignOut} />
          <Route path="/user" component={User} />
          <Route path="/browser" component={Browser} />
        </header>
        <Route exact path='/' component={LandingPage}/>
      </div>
      
    </Router>
  );
}
export default App;
