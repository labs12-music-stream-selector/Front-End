import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
/// All imported components
import LandingPage from "./components/LandingPage/LandingPage.js";
import TermsOfService from "./components/TermsOfService/TermsOfService.js";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.js";
import GetUserPlaylists from "./components/UserPlaylists/GetUserPlaylists.js";
import YoutubePlayer from "./components/YoutubePlayer/YoutubePlayer.js";
import Browser from "./components/Browser/Browser.js";
import User from "./components/user/User.js";
import Patreon from "./components/Patreon/Patreon.js";
import moodi from "./imgs/logoWord.svg";

class App extends Component {
  signMeOut = () => {
    if (sessionStorage.getItem("token")) {
      sessionStorage.removeItem("token");
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      alert("You successfully Signed Out");
      this.props.history.push("/");
      window.location.reload(true);
    } else {
      alert("Please Log in First");
    }
  };
  takeMetoUpdate = () => {
    if (sessionStorage.getItem("token")) {
      this.props.history.push("/user");
      window.location.reload(true);
    } else {
      alert("Please Log in First");
    }
  };
  render() {
    return (
      <Router>
        <RouterDiv className="App">
          <NavDiv className="this.state.token`">
            <nav className="navBar">
              <Link className="dropbtn" to="/home">
                Home
              </Link>
              <img src={moodi} alt="logo" />
              <div className="dropdown">
                <button className="dropbtn"> Menu</button>
                <div className="dropdown-content">
                  <Link to="/donation"> Support Us </Link>
                  <Link to="/privacypolicy"> Privacy Policy </Link>
                  <Link to="/termsofservice"> Term & Services </Link>
                  <Button className="update" onClick={this.takeMetoUpdate}>
                    {" "}
                    Update Profile{" "}
                  </Button>
                  <Button className="signoutBtn" onClick={this.signMeOut}>
                    {" "}
                    Sign Out{" "}
                  </Button>
                </div>
              </div>
            </nav>
          </NavDiv>
          {/* <GetUserPlaylists /> */}
          <Route exact path="/" component={LandingPage} />
          <Route path="/termsofservice" component={TermsOfService} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/player" component={YoutubePlayer} />
          <Route path="/user" component={User} />
          <Route path="/donation" component={Patreon} />
          <Route exact path="/home" component={Browser} />
        </RouterDiv>
      </Router>
    );
  }
}
export default App;

const RouterDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #272727;
  padding-top: 40px;
`;

const NavDiv = styled.div`
  .navBar {
    top: 0;
    position: fixed;
    display: flex;
    flex-direction: row;
    flex-wrap: warp;
    z-index: 100;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background: #272727;
    width: 100%;
    box-shadow: 0px 2px 2px black;
    img {
      width: 105px;
    }
    .dropbtn {
      text-align: center;
      text-decoration: none;
      background-color: #009fb7;
      color: white;
      padding: 16px;
      font-size: 14px;
      font-weight: bold;
      border: none;
      cursor: pointer;
      min-height: 100%;
      @media (max-width: 479px) {
        font-size: 12px;
      }
    }
    .dropdown {
      position: relative;
      display: inline-block;
    }
    .dropdown-content {
      text-align: center;
      display: none;
      position: absolute;
      right: 0;
      background-color: #007da6;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }
    .dropdown-content a {
      color: #eff1f3;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }
    .dropdown-content a:hover {
      background-color: #009fb7;
    }
    .dropdown:hover .dropdown-content {
      display: block;
    }
    .dropbtn:hover {
      background-color: #007da6;
    }
  }
  .dropdown-content .signoutBtn {
    border-radius: 5px;
    height: 25px;
  }
  .update {
    padding: 12px 16px;
  }
  .signoutBtn {
    border: 1px solid #009fb7;
    padding: 12px 16px;
  }
`;
const Button = styled.div`
  border: none;
  text-align: center;
  color: #eff1f3;
  :hover {
    background-color: #009fb7;
  }
`;
