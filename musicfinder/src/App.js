import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import LandingPage from "./components/LandingPage/LandingPage.js";
import Navigation from "./components/Navigation/Navigation";

import GetUserPlaylists from "./components/UserPlaylists/GetUserPlaylists.js";

function App() {
  return (
    <Router>
      <GetUserPlaylists />
      <RouterDiv className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Navigation} />
      </RouterDiv>
    </Router>
  );
}
export default App;

const RouterDiv = styled.div`
<<<<<<< HEAD
  witdth: 100%;
  min-height: 100vh;
  background: #696773;
  padding-top: 40px;
`;
=======
    width: 100%;
    min-height: 100vh;
    background: #272727;
    padding-top: 40px;
`
>>>>>>> 786aed59ab933e5db555a9b8519ae12e12ae0e0b
