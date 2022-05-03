import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "@asgardeo/auth-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider
      config={ {
        signInRedirectURL: process.env.REACT_APP_ASAGRDEO_SIGN_IN_REDIRECT_URL,
        signOutRedirectURL: process.env.REACT_APP_ASAGRDEO_SIGN_OUT_REDIRECT_URL,
        clientID: process.env.REACT_APP_ASGARDEO_CLIENT_ID,
        baseUrl: process.env.REACT_APP_ASAGRDEO_BASE_URL,
        scope: [ "openid","profile" ],
        disableTrySignInSilently: true,
        enableOIDCSessionManagement: true
      } }
    >
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
