import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "@asgardeo/auth-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider
        config={ {
          signInRedirectURL: "https://localhost:3000",
          signOutRedirectURL: "https://localhost:3000",
          clientID: "1uBYHyPf_C3sgEfMb7tRwtfyb7Qa",
          baseUrl: "https://api.asgardeo.io/t/netflixdemo",
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
