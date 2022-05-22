import React, { Component } from "react";

import "./todo-item.css";

export default class TodoItem extends Component {
  

  render() {
    const { info, onDeleted, onTogleImportant, onTogleDone, done, important} = this.props;

    let className = "todo-item__span";
    if (important) {
      className += " important";
    }
    if (done) {
      className += " done";
    }

    return (
      <>
        <div className="todo-item__span-width">
        <span 
          className={className} 
          onClick={onTogleDone}>
          {info}
        </span>
        </div>
        <div className="todo-item__button-grup">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={onTogleImportant}
          >
            <i className="bi bi-exclamation-lg"></i>
          </button>


          
          <button 
            type="button" 
            className="btn btn-outline-danger"
            onClick={onDeleted}
          >
            <i className="bi bi-trash3"></i>
          </button>
        </div>
      </>
    );
  }
}
