import axios from "axios";

// 액션 타입 정의
export const GET_USERS_START = "redux/users/GET_USERS_START";
export const GET_USERS_SUCCESS = "redux/users/GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "redux/users/GET_USERS_FAIL";

// 액션 생성 함수
export function getUsersStart() {
    return {
      type: GET_USERS_START
    }
  }
  
  export function getUsersSuccess(data) {
    return {
      type: GET_USERS_SUCCESS,
      data
    }
  }
  
  export function getUsersFail(error) {
    return {
      type: GET_USERS_FAIL,
      error,
    }
  }

// 초기값
const initialState = {
    loading: false,
    data: [],
    error:null
};

// reducer
export default function users(prevState = initialState, action){

    if(action.type === GET_USERS_START || action.type === GET_USERS_PENDING){
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

    if(action.type === GET_USERS_FULFILED){
        return{
            ...prevState,
            loading:false,
            data:action.payload
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

    if(action.type === GET_USERS_REJECTED){
        return{
            ...prevState,
            loading:false,
            error:action.payload
        }
    }

    return prevState;
}



// thunk
export function getUsersThunk() {
    // 함수를 리턴
    return async (dispatch) => {
      try {
        dispatch(getUsersStart())
        const response = await axios.get('https://api.github.com/users')
        dispatch(getUsersSuccess(response.data))
      } catch (error) {
        dispatch(getUsersFail(error))
      }
    }
  }
  

// promise-middleware
const GET_USER = 'redux/users/GET_USER'

export const GET_USERS_PENDING = 'redux/users/GET_USERS_PENDING'
export const GET_USERS_FULFILED = 'redux/users/GET_USERS_FULFILED'
export const GET_USERS_REJECTED = 'redux/users/GET_USERS_REJECTED'

export function getUsersPromise(){
  return{
    type:'GET_USER',
    paload: async() =>{
      const res = await axios.get('https://api.github.com/users')
      return res.data;
    }
  }
}