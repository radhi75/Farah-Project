import { combineReducers } from "redux";
import articleReducer from "./ArticleReducer"
import authReducer from "./AuthReducer";
import errorreducer from "./errorReducer"
const rootReducer = combineReducers({ articleReducer,authReducer , errorreducer});
export default rootReducer;