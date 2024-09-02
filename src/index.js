import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from "react-redux";
import { store } from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>

      <GoogleOAuthProvider clientId="613537331329-rdpqvaf6rmqeb8l4d2fp8fvlvvate3kf.apps.googleusercontent.com">

        <Provider store={store}>

          <App />

        </Provider>




      </GoogleOAuthProvider>;





    </React.StrictMode>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
