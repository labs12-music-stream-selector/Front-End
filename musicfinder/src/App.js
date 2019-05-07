import React from "react";
import "./App.css";
import { Route} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
<<<<<<< HEAD
import Login from "./components/LoginForm/OAuthGoogle.js";
import YoutubePlayer from "./components/YoutubePlayer/YoutubePlayer.js";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.js";
import TermsOfService from "./components/TermsOfService/TermsOfService.js";
import SignOut from "./components/SignOut/SignOut.js";
import Browser from "./components/Browser/Browser.js";
import User from "./components/user/User.js";
import LandingPage from "./components/LandingPage/LandingPage.js";
import styled from "styled-components";

import Patreon from "./components/Patreon/Patreon";

import NewPlaylist from "./components/youTubeUser/NewPlaylist.js";
=======
import styled from 'styled-components';

import LandingPage from './components/LandingPage/LandingPage.js';
import Navigation from "./components/Navigation/Navigation";
>>>>>>> 66de9baaa74befbdf994212527f20344c98d1378

function App() {
  return (
    <Router>
      <RouterDiv className="App">
<<<<<<< HEAD
        <header className="">
          <nav className="navBar" style={{ width: "100%", display: "flex" }}>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/browser">Browse Songs</Link>
            {/* <Link to='/privacypolicy'>Legal Stuff</Link> */}
            <Link to="/termsofservice">Terms & Services</Link>
            <Link to="/user">Your Profile</Link>
            <Link to="/signout">Log Out</Link>
            <Link to="/support-us">Support Us</Link>
          </nav>
          <Route path="/login" component={Login} />
          <Route path="/player" component={YoutubePlayer} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/termsofservice" component={TermsOfService} />
          <Route path="/signout" component={SignOut} />
          <Route path="/user" component={User} />
          <Route path="/browser" component={Browser} />
          <Route path="/support-us" component={Patreon} />
        </header>
        <Route exact path="/" component={LandingPage} />
=======
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={Navigation} />

>>>>>>> 66de9baaa74befbdf994212527f20344c98d1378
      </RouterDiv>
    </Router>
  );
}
export default App;

const RouterDiv = styled.div`
<<<<<<< HEAD
  .navBar {
    display: flex;
    flex-wrap: warp;
    background: black;
    width: 100%;
    justify-content: space-between;
    a {
      text-decoration: none;
      margin: 20px;
      min-height: 25px;
      color: white;
=======
    background: black;
    .navBar{
        display: flex;
        flex-wrap: warp;
        background : black;
        width : 100%;
        justify-content : space-between;
        a{
          text-decoration: none;
          margin: 20px;
          min-height : 25px;
          color : white;
        }
        a:hover{
          color : white;
          border-radius : 5px;
        }
>>>>>>> 66de9baaa74befbdf994212527f20344c98d1378
    }
    a:hover {
      color: white;
      border-radius: 5px;
      border: 1px solid grey;
    }
  }
`;
