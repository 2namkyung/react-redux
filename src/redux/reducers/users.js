import { GET_USERS_FAIL, GET_USERS_START, GET_USERS_SUCCESS } from "../actions";

const initialState = {
    loading: false,
    data: [],
    error:null
};

export default function users(prevState = initialState, action){

    if(action.type === GET_USERS_START){
        return{
            ...prevState,
            loading:true,
            error:null
        }
    }

    if(action.type === GET_USERS_SUCCESS){
        return{
            ...prevState,
            loading:false,
            data:action.data
        }
    }

    if(action.type === GET_USERS_FAIL){
        return{
            ...prevState,
            loading:false,
            data:[],
            error:action.error
        }
    }

    return prevState;
}