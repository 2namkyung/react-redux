import React, { useCallback } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { getUsersPromise, getUsersThunk } from '../redux/actions'
import UserList from '../components/UserList'


export default function UserListContainer(){

    const users = useSelector((state)=>state.users.data)
    const dispatch = useDispatch()

    // redux-thunk
    const getUsers = useCallback(()=>{
        dispatch(getUsersThunk())
    }, [dispatch])

    // redux-promise-middleware
    const getUsers2 = useCallback(()=>{
        dispatch(getUsersPromise())
    }, [dispatch])

    return (<UserList users={users} getUsers={getUsers}/>)
}