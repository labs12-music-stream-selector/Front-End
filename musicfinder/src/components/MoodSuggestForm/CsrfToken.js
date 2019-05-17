import React from "react";
import Cookies from "js-cookie";

let csrftoken = Cookies.get("csrftoken");

const CsrfToken = () => {
  return <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />;
};

export default CsrfToken;
