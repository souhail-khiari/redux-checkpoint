import { combineReducers } from "redux";
import toDosReducer from './toDosReducers'
import newToDosIdeas from './newToDosIdeas'

export default combineReducers({toDosReducer, newToDosIdeas})