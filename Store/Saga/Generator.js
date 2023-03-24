import { call, put } from "redux-saga/effects";
import { storeData } from "../Action/GlobalActions";
import callAPI from '../A_P_I/Call_API'

export function* fetchSaga(){
    try{
        const data=yield call(callAPI.api)
        yield put(storeData(data));
        //console.log(data);
    }
    catch(error){

    }
}