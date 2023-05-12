import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";
import './Styles/index.css'
import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain="dev-ijngicqvxo0ckgpf.us.auth0.com"
    clientId="yJ9ifG1EcvfmQZxmywuyUGlprxvw9a4y"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);