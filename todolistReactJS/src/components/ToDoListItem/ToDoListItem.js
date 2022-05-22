import React from "react";

import './ToDoListItem.css';


const ToDoListItem = ({ labels, onDeleted, onToggleImportant, onToggleDone, important, lineThrough}) => {
    
      let className = 'list-group-item__span';
      
      if (important) {
        className += ' important';
      }
      
      if (lineThrough) {
        className += ' lineThrough';
      }

    return  (
        <>
          <span className={className} onClick = { onToggleDone }> 
            { labels } 
          </span>

          <div className="list-group-item__button">

            <button 
            type="button" 
            className="btn btn-outline-success" onClick = { onDeleted }>
                <i className="bi bi-trash"></i>
            </button>

            <button 
            type="button" 
            className="btn btn-outline-danger" onClick = { onToggleImportant }>
                <i className="bi bi-exclamation-lg"></i>
            </button>
          </div>
        </>
    )};


export default ToDoListItem;