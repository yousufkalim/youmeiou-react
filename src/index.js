import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
import "./custom.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux"
import {createStore} from "redux";
import combineReducers from "./store/reducers";
import { PersistGate } from 'redux-persist/integration/react'
import {persistor, store} from "./store";
// import authReducer from "./store/reducers/user";

//  Fonts
import './fonts/FiraSans-Regular.ttf';
import './fonts/FiraSans.ttf';
import './fonts/FiraSans-Bold.ttf';

// const store = createStore(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);