import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import marketReducer from "./marketReducer";
import positionsReducer from "./positionsReducer";
import { InitialLevels } from "../forms";
import { createForms } from 'react-redux-form';

const rootReducer = combineReducers({
    account: accountReducer,
    market: marketReducer,
    positions: positionsReducer,
    ...createForms({
        levelsForm: InitialLevels
    })
});

export default rootReducer;