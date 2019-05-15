import React from "react";
import ScriptLoader from "react-script-loader-hoc";
import GoogleButton from "../../imgs/googleButtons/smallGoogleButtons/btn_google_signin_light_normal_web.png";

const LoadGapi = (props, { scriptsLoadedSuccessfully, scriptsLoaded }) => {
  console.log(scriptsLoadedSuccessfully, scriptsLoaded, props);
  if (!props.scriptsLoadedSuccessfully) {
    return (
      <div>
        <p>Loading . . .</p>
      </div>
    );
  }
  console.log("Script Loaded!");
  return (
    <div>
      <button>
        <img
          src={GoogleButton}
          alt="Google Sign in"
          onClick={props.loadClient}
        />
      </button>
    </div>
  );
};

export default ScriptLoader("https://apis.google.com/js/api.js")(LoadGapi);
