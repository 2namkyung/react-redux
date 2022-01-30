// redux-actions
import { createActions, handleActions } from "redux-actions";

export const { showAll, showDone } = createActions('SHOW_ALL', 'SHOW_DONE', {prefix:'redux/filter'})
const initialState = 'ALL'

export const reducer = handleActions({
  SHOW_ALL:(state, action)=> 'ALL',
  SHOW_DONE:()=>'DONE'
}, initialState, {prefix:'redux/filter'})


// ------------------------------------------

// 액션 타입 정의
const SHOW_DONE = "redux/filter/SHOW_DONE";
const SHOW_ALL = "redux/filter/SHOW_ALL";

// 액션 생성 함수
export const showDone = () => ({ type: SHOW_DONE });
export const showAll = () => ({ type: SHOW_ALL });

// reducer
export default function filter(previousState, action) {
  // 최초에 초기값 할당
  if (previousState === undefined) {
    return "SHOW_ALL";
  }

  // 변경이 일어나는 로직
  if (action.type === SHOW_DONE) {
    return "SHOW_DONE";
  }

  if (action.type === SHOW_ALL) {
    return "SHOW_ALL";
  }

  // 변경이 안일어났음.
  return previousState;
}