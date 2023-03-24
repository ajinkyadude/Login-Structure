import {all,takeLatest} from 'redux-saga/effects';
import { FETCH_DATA } from '../Type/type';
import { fetchSaga } from './Generator';

export default function* SagaRoot(){
    //console.log("Inside Watche")
    yield all([FETCH_DATA,fetchSaga()])
    
}
