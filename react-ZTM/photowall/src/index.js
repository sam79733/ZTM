import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import "./components/styles/stylesheet.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./redux/reducer";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
