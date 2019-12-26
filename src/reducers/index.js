import { combineReducers } from "redux";

import tweets from "./tweets";
import users from "./users";
import authUsers from "./authUsers";
import { loadingBarReducer } from 'react-redux-loading'; 

export default combineReducers({
  tweets,
  users,
  authUsers, 
  loadingBar: loadingBarReducer
});
