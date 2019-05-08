import React from "react";
import PatreonButton from './PatreonButton';
import styled from 'styled-components';

export default function PatreonSignup() {
  const policyStyle = {
    color: "inherit",
    textDecoration: "none"
  };
  return (
    <DonateBar>
      <h1 className="h1Class">Support Moody Beats!</h1>
      <p>Love the project but don't know how to contribute? There are two great ways you can help.</p>
      <ul>
        <li>Submit music that is a Creative Commons licensed piece of work.  We're always looking to add to the collection for others!</li>
        <li>Or help us out by supporting us on <PatreonButton /></li>
      </ul>

    </DonateBar>
  );
}

const DonateBar = styled.div`
      width: 100%;
      min-height: 100%;
      h1{
        margin-top:0;
      }
      padding-top: 60px;

`