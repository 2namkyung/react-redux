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