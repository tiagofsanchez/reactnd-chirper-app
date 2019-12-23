import { combineReducers } from "redux";

import tweets from "./tweets";
import users from "./users";
import authUsers from "./authUsers";

export default combineReducers({
  tweets,
  users,
  authUsers
});
