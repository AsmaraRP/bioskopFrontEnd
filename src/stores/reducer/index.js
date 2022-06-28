import { combineReducers } from "redux";
import movie from "./movie";
import schedule from "./schedule";
import user from "./user";
import ticket from "./ticket";

export default combineReducers({
  movie,
  schedule,
  user,
  ticket
});
