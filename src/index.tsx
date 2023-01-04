import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Auth0Provider
    // TO DO update domain and clientId when hosting the App
      domain="dev-h3joz3ssdv36fqhr.eu.auth0.com"
      clientId="GTTvFWdXYaF21kq5EgnGN0MU8zjCjD5k"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
);
