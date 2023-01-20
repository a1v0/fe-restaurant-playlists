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
            domain="dev-swqpr6cgcs2vvd88.uk.auth0.com"
            clientId="5tzaC16Sp4QqC2rvotWz9sWyNbxyJska"
            redirectUri={window.location.origin}
        >
            <App />
        </Auth0Provider>
    </BrowserRouter>
);
