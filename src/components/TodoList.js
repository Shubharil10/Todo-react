import React from 'react'
import Todo from './Todo'
import styles from './Todolist.module.css';
const TodoList = ({todos,deleteTodo,toggleTodo}) => {
    return (
        <ul className={styles['todo-list']}>
            {
                todos.map((todo,index) => {
                    return <Todo 
                    id ={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    key={index}
                    deleteTodo = {deleteTodo}
                    toggleTodo = {toggleTodo}
                 />
                 })
 
            }
        </ul>
    )
    
}

export default TodoList
