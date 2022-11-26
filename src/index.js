import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";
import './Styles/index.css'
import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain="dev-7zduzujnusqb01hk.us.auth0.com"
    clientId="7LHqzqxi4zYsQLM4tO9Ypp1458ekvgKJ"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);