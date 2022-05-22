import React from "react";

import ToDoListItem from "../ToDoListItem/ToDoListItem";


import "./ToDoList.css"

const ToDoList = ({props, onDeleted, onToggleDone, onToggleImportant}) => {
    console.log(props);
    let elements = props.map((item)=> {

        const {id, ...otherProps} = item;
        
        return (
        <li key={id} className="list-group-item">
            < ToDoListItem {...otherProps} 
            
            onDeleted = {() => onDeleted(id)}
            onToggleDone = {() => onToggleDone(id)}
            onToggleImportant = {() => onToggleImportant(id)}/> 
            
        </li>
        );
    });
    
    return ( 
    <ul className="list-group toto-list">
        {elements}
    </ul>
    );
  };

export default ToDoList;