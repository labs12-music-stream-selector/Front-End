import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/LoginForm/OAuthGoogle.js";
import YoutubePlayer from "./components/YoutubePlayer/YoutubePlayer.js";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.js";
import TermsOfService from "./components/TermsOfService/TermsOfService.js";
import SignOut from './components/SignOut/SignOut.js'
import Browser from './components/Browser/Browser.js';
import User from './components/user/User.js'
import LandingPage from './components/LandingPage/LandingPage.js';
import styled from 'styled-components';

import Patreon from './components/Patreon/Patreon';

function App() {
  return (
    <Router>
      <RouterDiv className="App">
        <header className="">
          <nav className="navBar" style={{ width: '100%', display: 'flex' }}>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/browser'>Browse Songs</Link>
            {/* <Link to='/privacypolicy'>Legal Stuff</Link> */}
            <Link to='/termsofservice'>Terms & Services</Link>
            <Link to='/user'>Your Profile</Link>
            <Link to='/signout'>Log Out</Link>
            <Link to='/support-us'>Support Us</Link>
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

        <Route exact path='/' component={LandingPage} />

      </RouterDiv>
    </Router>
  );
}
export default App;


const RouterDiv = styled.div`
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
          border: 1px solid grey;
        }
    }


`