import React from 'react'
import './styles.css';

interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>> //28.30 min Not fully know 
    handleAdd:(e: React.FormEvent) => void ; // add the e: React.FormEvent here as well 35 min
}
//Inputting the parameter from the App.tsx
//Another Way to write because this is a function (29.30 Min)
const InputFeild: React.FC<Props> = ({todo, setTodo,handleAdd}) => {
  return (
    <form className="input" onSubmit={handleAdd}>
        <input type='input' 
        value={todo}
        onChange={
          (e) =>setTodo(e.target.value) //taking an event
        }
        placeholder='Enter a Goals to Crush' className='input__box'/>
        <button className='input_submit' type='submit'>
          Go
        </button>
    </form>
  )
}

export default InputFeild