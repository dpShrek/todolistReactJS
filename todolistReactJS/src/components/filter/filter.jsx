import React, { Component } from 'react';
import './filter.css';

export default class Filter extends Component {

  buttons = [
    {name:'all', label: 'All'},
    {name:'active', label: 'Active'},
    {name:'done', label: 'Done'}
  ]
  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({name, label})=> {
    const isActive = filter === name;
    const clazz = isActive ? 'active' : 'btn'
      return (
        <button 
            type="button" 
            className={`btn btn-outline-primary ${clazz}`}
            key={name}
            onClick={ () => onFilterChange(name)}
          >
            {label}
          </button>
      )
    })

  return (
    <>
    <div className="search-panel__buttons">
        <div className="btn-group" role="group" aria-label="Basic example">
         {buttons}
        </div>
      </div>
    </>
  );
};
};