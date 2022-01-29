import React from 'react'
import TodoListConainer from '../containers/TodoListContainer'
import TodoFormContainer from '../containers/TodoFormContainer'

export default function Todos(){
    return(
        <div>
            <TodoListConainer/>
            <TodoFormContainer/>
        </div>
    )
}