import { combineReducers } from "redux";
import userReducer from "./reducers/user.reducer";
import appReducer from "./reducers/app.reducer";
import recReducer from "./reducers/rec.reducer";

export const rootReducer = combineReducers({
	userReducer,
	appReducer,
	recReducer,
});
