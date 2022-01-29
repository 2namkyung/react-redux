import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";
import users from './users';

export const todoApp = combineReducers({
  todos,
  filter,
  users
});