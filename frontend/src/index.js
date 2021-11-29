import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";

import routes from "./routes";

import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={`${process.env.REACT_APP_FRONTEND_URL}${routes.homePage}`}
    audience={`${process.env.REACT_APP_AUTH0_AUDIENCE_URL}`}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById("root")
);
