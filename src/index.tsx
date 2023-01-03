import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Auth0Provider
    domain="dev-h3joz3ssdv36fqhr.eu.auth0.com"
    clientId="GTTvFWdXYaF21kq5EgnGN0MU8zjCjD5k"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
