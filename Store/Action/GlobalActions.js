import { FETCH_DATA } from "../Type/type";
import { STORE_DATA } from "../Type/type";

export const fetchData=()=>{
    // console.log("Inside Action")
    return {type: FETCH_DATA}
}   

export const storeData=(que)=>{
    if(que)
    {
       // console.log(que);
        return{
            type: STORE_DATA,
            payload: que
        }
    }
}