import React from 'react';
import './header.css';

const Header = ({ toDo, done }) => {
  return (
    <header className="app-header">
      <div className="app-header__h1">
        <h1>Список дел</h1>
        <div id='time' className='time'></div>
      </div>
      <div className="app-header__info">
        <span className='app-header__info-span'>
          {toDo} осталось задач, {done} выполнено!
        </span>
      </div>
    </header>
  );
};

export default Header;