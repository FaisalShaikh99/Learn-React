import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-o2pp18zra7b1ff7s.us.auth0.com"
    clientId="rBADi6mzgx8uZGq7KrpoJjQkplplljTU"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
