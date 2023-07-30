import React, { useEffect, useState, useRef } from "react";
//The TodoForm component is defined as a functional component that takes props as an argument.
const TodoForm = (props) => {
  // The useState hook is used to declare a state variable called input, 
  // which will store the value of the input field. If the props.edit value is provided, 
  // it initializes input with props.edit.value, otherwise it sets an empty string as the initial value. 
  // The setInput function is used to update the state variable.
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  //The useRef hook is used to create a ref object called inputRef. 
  //This ref will be used to focus on the input field later.
  const inputRef = useRef(null)

  //The useEffect hook is used here to perform a side effect. It will run after every render of the component. 
  //In this case, it focuses on the input field by calling inputRef.current.focus().
  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = (e) => {
    setInput(e.target.value); //whatever the input is, it can be accessed by e.target.value
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents refreshing the page when clicking on button
    props.onSubmit({
        id: Math.floor(Math.random()*10000),
        text: input
    })
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
           <>
           <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          ></input>
          <button className="todo-button edit">Update</button>
          </>) : 
        (
        <><input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      ></input>
      <button className="todo-button">Add Todo</button>
      </>)
      }
      
    </form>
  );
};

export default TodoForm;
