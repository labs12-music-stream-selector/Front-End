import React from 'react';
import {gapi} from 'googleapis';

export default function NewPlaylist() {
  const YTAPI_KEY;
  const YTCLIENT_ID;

  let isAuthorized;
  let currentApiRequest;
  
  let GoogleAuth;
  (function initClient() {
    gapi.client.init({
      'apiKey': YTAPI_KEY,
      'clientId': YTCLIENT_ID,
      'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
    }).then(res => {
      GoogleAuth = gapi.auth2.getAuthInstance();
  
      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);
    }).catch(err => {
      console.log(err);
    })
  })();

  /**
  * Store the request details. Then check to determine whether the user
  * has authorized the application.
  *   - If the user has granted access, make the API request.
  *   - If the user has not granted access, initiate the sign-in flow.
  */
  function sendAuthorizedApiRequest(requestDetails) {
    currentApiRequest = requestDetails;
    if(isAuthorized) {
      // Make API request
      //gapi.client.request(requestDetails)

      //Reset currentApiRequest variable.
      currentApiRequest = {};
    } else {
      GoogleAuth.signIn();
    }
  }

  /**
  * Listener called when user completes auth flow. If the currentApiRequest
  * variable is set, then the user was prompted to authorize the application
  * before the request executed. In that case, proceed with that API request.
  */
  function updateSigninStatus(isSignedIn) {
    isAuthorized = true;
    if(isSignedIn) {
      isAuthorized = true;
      if(currentApiRequest) {
        sendAuthorizedApiRequest(currentApiRequest);
      }
    } else {
      isAuthorized = false;
    }
  }

  return (
    <div>
      <button onClick={GoogleAuth.signIn()}>Login with Google</button>
    </div>
  )
}
