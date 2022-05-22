import React from "react";
import ToDoListItem from '../ToDoListItem/ToDoListItem'

const TitleInfo = (props) => {
    return (
    <div className="titleinfo">
        <span className="titleinfo__span1">0 more todo</span>, <span className="titleinfo__span2">3 done</span>
    </div>
    );
  };

export default TitleInfo;