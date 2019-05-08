import React from "react";
import "./App.css";
import { Route} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import styled from 'styled-components';

import LandingPage from './components/LandingPage/LandingPage.js';
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <Router>
      <RouterDiv className="App">
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={Navigation} />

      </RouterDiv>
    </Router>
  );
}
export default App;


const RouterDiv = styled.div`
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
    }


`