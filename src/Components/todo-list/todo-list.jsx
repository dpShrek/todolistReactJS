import React from "react";
import TodoItem from "../todo-item/todo-item";
import "./todo-list.css";

const Todolist = ( {tododata, onDeleted, onTogleImportant, onTogleDone }) => {
  let items = tododata.map((el) => {
    
    const { id, ...info } = el;
   
    return (
      <li key={id} className="todo-list-li">
        <TodoItem 
          {...info} 
          onDeleted={() => onDeleted(id)}
          onTogleImportant = {()=> onTogleImportant(id)}
          onTogleDone ={()=> onTogleDone(id)}
        />
      </li>
    );
  });

  return (
    <>
      <ul className="todo-list-ul">{items}</ul>
    </>
  );
};

export default Todolist;
