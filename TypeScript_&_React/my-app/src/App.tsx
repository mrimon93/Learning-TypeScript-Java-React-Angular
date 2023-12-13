import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import { ToDo } from "./model";
// // Video: https://www.youtube.com/watch?v=FJDVKeh7RJI


//Functional Component 17.30 Min
//App: React.ReactNode -- Takes in everything 
const App:React.FC = () => {
//Usestate (24 Min)
   const [todo, setTodo] = useState<string>(""); //Creating our first state giving thE state a type  (multiple type 27 Min)
  const [todos, setTodos] = useState<Array<ToDo>>([]); //Store the values 
  // const [CompletedTodos, setCompletedTodos] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); //Getting error because e is implicity any type 33 min
    
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo(""); //Empty the field
    } //36 Min

  };


  return (
    <div className="App">
      <span className='heading'> Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
}

// //We now use the Aliases (Type and Interface) (14:23 Min)
// //It is going to work like the way Type is working
// interface Person {
//   name: string; 
//   age?: number;
// }

//Extending 16 Min 
//In interface we can extend 
//interface Guy extends Person { name: string; age?: number;}

//After that we can use the classess 
/*

We can use the interface
*/


export default App;


// // In TypeScript we have to assign the type after the :Type 
// //Good practice to keep the first Letter Captial

// // -----------------------------------------

// // Union Type : (10 Min)
// // There is as well the Union Type where a variable can have 2 type, we use the | 

// let name : string;
// let age: number;
// let isStudent: boolean;
// let hobbies: string[];
// let role:[] //Tupple--> which consist a fixed of value and types during the decleration


// //How do we define object? There is 2 Way. 

// // let person: Object; -- This one is not recommended 

// // Other way is using the "type" it works like interface (8 Min of the video)


// type Person = {
//   name: string; 
//   age: number;
//   //To make it optional use the ?
//   // age?: number;
// }

// let person: Person;



//How do we declare a function type? --> There is 2 ways to declare that (10.30 miN)

// 1. let PrintName: Function; --> Same as object we do not recommend that 
// 2. let printName: (name: string) => void;


// To have any value we use the type "any"
// Ex. let name: any; -- This is not recommended where we want to assign proper type according


//Unknown Type and never Type! If you do not know the type (12:30 Min)
//Ex. let personName:unknown
