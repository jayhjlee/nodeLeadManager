// This is the place where we combine all reducers and exports it.

import { combineReducers } from "redux";
import home from "./home";
import user from "./user";

export const rootReducer = combineReducers({ home, user });
