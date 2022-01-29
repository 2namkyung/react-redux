import axios from "axios";

export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

export const SHOW_DONE = "SHOW_DONE";
export const SHOW_ALL = "SHOW_ALL";

export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});

export const completeTodo = (index) => ({
  type: COMPLETE_TODO,
  index,
});

export const showDone = () => ({ type: SHOW_DONE });
export const showAll = () => ({ type: SHOW_ALL });

// users
export const GET_USERS_START = "GET_USERS_START";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";

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