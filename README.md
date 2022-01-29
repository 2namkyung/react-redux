# Redux

### Redux action
- 액션은 객체(Object)이다
- {type:'Action-type', payload:'data'}
- type은 필수, 문자열
- 액션 생성자를 통해 만들어낸 객체를 redux store에 보낸다
- 액션은 store로 보내는 Input

### Redux reducer
- action type에 따라 달라진 결과를 만들어준다
- pure function
- Immutable

### React redux
- Provider Component
- connect() 함수를 통해 Container를 만들어준다
 - useDispatch()
 - dispatch는 action을 store에 전달하는 행위

```
const Container = connect(
     (state) =>({
         data:state.data
     }),
     (dispatch)=>({
         result: (index) =>{
             dispatch(actioinFunction(index))
         }
     })
 )(Component)


const dispatch = useDispatch()
function result(index){
    dispatch(actionFunction(index))
}
```

### redux-thunk
- Redux Middleware
- 함수를 dispatch 할 수 있게 해주는 middleware
- Redux async 처리를 위한 라이브러리
- action 생성자를 활용하여 비동기 처리
 - 액션 생성자가 액션이 아닌 함수를 리턴한다
- 액션 생성자가 함수를 리턴할 때만 반응한다

### redux-promise-middleware
- Redux Middleware
- Redux async 처리를 위한 라이브러리
- actionType_PENDING , actionType_FULFILED , actionType_REJECTED

### redux-saga
- Redux Middleware
- 까다로운 비동기 작업 처리 가능
- Generator 객체를 만들어 내는 생성 함수 이용
- saga function 등록
- saga middleware 실행
- saga 함수를 실행할 액션 dispatch