import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import marketReducer from "./marketReducer";

const rootReducer = combineReducers({
    account: accountReducer,
    market: marketReducer,
    
});

export default rootReducer;