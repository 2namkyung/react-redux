import axios from 'axios'
import React, { useEffect } from 'react'

export default function UserList({users, start, success, fail}){

    useEffect(()=>{
        async function getUsers(){
            try{
                start()
                const response = await axios.get('https://api.github.com/users')
                success(response.data)
            }catch(error){
                fail(error)
            }
        }

        getUsers()
    }, [start, success, fail])

    if(users.length===0){
        return <p>현재 유저 정보 없음</p>
    }

    return(
        <ul>
            {users.map(user => <li key={user.id}>{user.login}</li>)}
        </ul>
    )
}