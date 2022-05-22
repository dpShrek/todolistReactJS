import React from "react";

import './AppHeader.css';

const AppHeader = ({todo, done}) => {
    return (
    <div className="todotitle">
        <div className="todotitle__h1">
            <h1>My TooDoo List</h1>
        </div>
        <div className="todotitle__info">
            <span className="todotitle__span">{todo} more todo</span>, <span className="titleinfo__span2">{done} done</span>
        </div>
    </div>
    
    );
  };

export default AppHeader;