import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {
  createStore,
  compose,
  combineReducers,
  applyMiddleware
} from "redux";
import thunk from "redux-thunk";


import './index.css';
import App from './App.jsx';

import recipeInfoReducer from "./store/reducers/recipe-info.reducer";
import generalReducer from "./store/reducers/general.reducer";

//devtool variables
// @ts-ignore
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  recipeInfo: recipeInfoReducer,
  general: generalReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
