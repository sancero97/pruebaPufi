import { combineReducers } from "redux";
import counterReducer from "./configuration/configuration.reducer";
const rootReducer=combineReducers({
    counter:counterReducer

})

export default rootReducer;