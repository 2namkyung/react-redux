import React from 'react';
import { applyMiddleware, createStore } from "redux";
import { todoApp } from "./reducers/reducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const store = createStore(todoApp, composeWithDevTools(applyMiddleware(thunk, promise)));

export default store;