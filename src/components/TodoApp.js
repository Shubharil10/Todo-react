import React,{useState,useEffect} from 'react'
import TodoList from './TodoList'
import InputF from './InputF'
import styles from './TodoApp.module.css'
import {v4 as uuid} from 'uuid';


const TodoApp = () => {

    const intialTodos = JSON.parse(window.localStorage.getItem('todos')); 
    const [todos,setTodos]= useState(intialTodos);
    useEffect(() =>{
        window.localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])
    
    const addTodo = (inpiutTask) => {
        setTodos((prevState) => {
            return[...prevState,
                {id:uuid(),
                task:inpiutTask,
                completed:false}];
        })
    }
    const deleteTodo = (todoid) => {
        setTodos((prevState) => {

            return prevState.filter((todo) => todo.id !== todoid);
        })

    }

    const toggleTodo=(todoid) =>
    {
        setTodos((prevState)=>{
            return prevState.map((todo) => {
                return todo.id === todoid ? { ...todo, completed:!todo.completed} : todo;
            })
        })
    }

    return (
        <div>
            <section className={styles['todo-form']}> 
             <InputF 
             addTodo={addTodo} />
            </section> 
            <section className={styles['todo-list']}>         
            <TodoList 
                todos={ todos }
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
            />
            </section>
        </div>
    )
}

export default TodoApp
