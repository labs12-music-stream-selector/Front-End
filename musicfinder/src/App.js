import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import LandingPage from "./components/LandingPage/LandingPage.js";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <Router>
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
    background: #272727;
=======
  witdth: 100%;
  min-height: 100vh;
  background: #696773;
  padding-top: 40px;
>>>>>>> 613e40565e5e26276d7a566f8deb8a9d4336aad5
`
