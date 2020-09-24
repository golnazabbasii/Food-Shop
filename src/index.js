import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/bootstrap/css/bootstrap-rtl.min.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { createStore,combineReducers,applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import fReducer from "./store/reducers/foodbuilder";
import authReducer from ".//store/reducers/auth"

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

const rootReducer=combineReducers({
    food:fReducer,
    auth:authReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
