import React from 'react';
import { applyMiddleware, createStore } from "redux";
import { todoApp } from "./reducers/reducer";
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(todoApp, composeWithDevTools(applyMiddleware()));

export default store;