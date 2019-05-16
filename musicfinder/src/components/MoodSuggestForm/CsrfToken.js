import React from "react";

let CSRF_TOKEN = getCookie("csrftoken");

const CsrfToken = () => {
  return <input type="hidden" name="csrfmiddlewaretoken" value={CSRF_TOKEN} />;
};

export default CsrfToken;
