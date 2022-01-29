import React, { useCallback } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import axios from 'axios'
import { getUsersFail, getUsersStart, getUsersSuccess } from '../actions'
import UserList from '../components/UserList'

export default function UserListContainer(){

    const users = useSelector((state)=>state.users.data)
    const dispatch = useDispatch()

    const getUsers = useCallback(async function getUsers(){
        try{
            dispatch(getUsersStart())
            const response = await axios.get('https://api.github.com/users')
            dispatch(getUsersSuccess(response.data))
        }catch(error){
            dispatch(getUsersFail(error))
        }
    }, [])

    return (<UserList users={users} getUsers={getUsers}/>)
}