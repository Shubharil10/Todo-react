import React,{useState} from 'react'
import  styles from './InputF.module.css'

const InputF = (props) => {

    const [input,setInput] = useState('');


    const inputChangeHandler= (e) => {
        setInput(e.target.value)

    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(input);
        props.addTodo(input);
        setInput("");
    }




    return (
        <form  onSubmit={formSubmitHandler} className={styles['todoinput']}>
            <label htmlFor="todo">
                Add Todo                        
            </label>
            <input 
             type="text"
              id="todo"
              onChange={inputChangeHandler}
              value={input}
              />
            <button type="submit"> Add Todo</button>
        </form>
    
    )
}

export default InputF
