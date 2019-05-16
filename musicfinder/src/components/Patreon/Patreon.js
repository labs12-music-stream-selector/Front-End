import React from "react";
import PatreonButton from './PatreonButton';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";


function PatreonSignup() {
  return (
    <SupportPageWrapper>
      <div className="container">
        <h2 className="support--h1">Support Moody Beats!</h2>
        <h3 className="support--p">Love the project but don't know how to contribute? There are two great ways you can help.</h3>
        <ul className="support--ul">
          <li className="support--li">Submit music that is a Creative Commons licensed piece of work.  We're always looking to add to the collection for others!</li>
          <li className="support--li">Or help us out by supporting us on Patreon</li>
          <li className="support--li"><PatreonButton /></li>
        </ul>
      </div>
    </SupportPageWrapper>
  );
}

const SupportPageWrapper = styled.div`
  margin-top: 0px;
  color: white;
  background-color: #3232;
  height: 100vh;
  padding-top: 10vh;
  padding-bottom: 60px;
  width: 100%;
  min-height: max-content;
  .container {
    max-width: 1200px;
    width: 66%;
    margin: 0 auto;
    color: white;
    @media (max-width: 500px) {
      width: 80%;
    }
  }
  .support--h1 {
    margin: 0px;
    padding-top: 30px;
    color: white;
    margin-bottom: 40px;
  }
  .support--ul {
    list-style: none;
    padding-left: 0;
  }
  .support--li {
    margin-top: 30px;
  }

`
export default withRouter(PatreonSignup);
