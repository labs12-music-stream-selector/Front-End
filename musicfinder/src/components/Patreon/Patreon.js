import React from "react";
import PatreonButton from './PatreonButton';

export default function PatreonSignup() {
  const policyStyle = {
    color: "inherit",
    textDecoration: "none"
  };
  return (
    <div>
      <h1>Support Moody Beats!</h1>
      <p>Love the project but don't know how to contribute? There are two great ways you can help.</p>
      <ul>
        <li>Submit music that is a Creative Commons licensed piece of work.  We're always looking to add to the collection for others!</li>
        <li>Or help us out by supporting us on <PatreonButton /></li>
      </ul>

    </div>
  );
}
