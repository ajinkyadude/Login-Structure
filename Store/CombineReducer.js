import { combineReducers } from "redux";
import Reducer from "./Reducer/GlobalReducer";
import Reducer2 from "./Reducer/New_Reducer";

const rootReducer=combineReducers({
    reducer1: Reducer,
    reducer2: Reducer2
})

export default rootReducer;