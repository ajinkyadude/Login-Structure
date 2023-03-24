import { FETCH_DATA, STORE_DATA } from "../Type/type";

const initialState={
    question: []
};

const Reducer=(state=initialState,action)=>{    
    switch(action.type)
    {
        case FETCH_DATA:    
        return{
            ...state,
        }
        case STORE_DATA: 
        console.log("action : "+JSON.stringify(action.payload))
        return{
            ...state,
            question: action.payload
        }
        default: return state;
    }
}

export default Reducer;