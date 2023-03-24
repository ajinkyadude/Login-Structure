import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
//import Reducer from "./Reducer/GlobalReducer";
import SagaRoot from "./Saga/Watcher";
import rootReducer from "./CombineReducer";

//console.log("Inside Root Saga");

const middleWare=createSagaMiddleware();
const store=createStore(rootReducer,applyMiddleware(middleWare));

middleWare.run(SagaRoot);

export default store;
