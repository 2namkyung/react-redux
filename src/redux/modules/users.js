import axios from "axios";
import { push } from "connected-react-router";
import { call, delay, put, takeEvery } from 'redux-saga/effects'

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
  error: null
};

// reducer
export default function users(prevState = initialState, action) {

  if (action.type === GET_USERS_START || action.type === GET_USERS_PENDING) {
    return {
      ...prevState,
      loading: true,
      error: null
    }
  }

  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...prevState,
      loading: false,
      data: action.data
    }
  }

  if (action.type === GET_USERS_FULFILED) {
    return {
      ...prevState,
      loading: false,
      data: action.payload
    }
  }

  if (action.type === GET_USERS_FAIL) {
    return {
      ...prevState,
      loading: false,
      data: [],
      error: action.error
    }
  }

  if (action.type === GET_USERS_REJECTED) {
    return {
      ...prevState,
      loading: false,
      error: action.payload
    }
  }

  return prevState;
}



// thunk
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}
export function getUsersThunk() {
  // 함수를 리턴
  return async (dispatch, getState, { history }) => {
    try {
      dispatch(getUsersStart())

      // sleep
      await sleep(2000)
      const response = await axios.get('https://api.github.com/users')
      dispatch(getUsersSuccess(response.data))
      history.push('/')

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

export function getUsersPromise() {
  return {
    type: 'GET_USER',
    payload: async () => {
      const res = await axios.get('https://api.github.com/users')
      return res.data;
    }
  }
}

// redux-saga
const GET_USERS_SAGA_START = 'GET_USERS_SAGA_START'

function* getUsersSaga(action) {
  try {
    yield put(getUsersStart())
    // sleep
    yield delay(2000)

    const res = yield call(axios.get, 'https://api.github.com/users')
    yield put(getUsersSuccess(res.data))
    yield put(push('/'))

  } catch (error) {
    yield put(getUsersFail(error))
  }
}

// 액션 생성 함수
export function getUsersSagaStart(){
  return{
    type:GET_USERS_SAGA_START
  }
}

export function* usersSaga(){
  yield takeEvery(GET_USERS_SAGA_START, getUsersSaga)
}