import { combineReducers } from "redux";
import moviesReducer from "store/reducers/moviesReducer";

export default combineReducers({
  movies: moviesReducer
});