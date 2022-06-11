import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
const rootReducer = combineReducers({
  studentManagement: studentReducer,
});
export default rootReducer;
