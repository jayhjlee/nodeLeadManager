// This is our entry point for redux store

import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

import { rootReducer } from "./reducers";

const middleware = [thunk];

process.env.NODE_ENV !== "production" ? middleware.push(logger) : middleware;

export const store = createStore(rootReducer, applyMiddleware(...middleware));
