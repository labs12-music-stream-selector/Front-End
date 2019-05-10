import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import LandingPage from "./components/LandingPage/LandingPage.js";
import Navigation from "./components/Navigation/Navigation.js";
import TermsOfService from "./components/TermsOfService/TermsOfService.js";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.js";
import GetUserPlaylists from "./components/UserPlaylists/GetUserPlaylists.js";

function App() {
  return (
    <Router>
      <RouterDiv className="App">
        {/* <GetUserPlaylists /> */}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Navigation} />
        <Route path="/termsofservice" component={TermsOfService} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />
      </RouterDiv>
    </Router>
  );
}
export default App;

const RouterDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #272727;
  padding-top: 40px;
`;
