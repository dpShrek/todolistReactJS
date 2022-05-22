import React, {Component} from "react";

import './SearchPanelButton.css'


export default class SearchPanelButton extends Component {
   
   buttons = [
       {name:'All', label: 'All'},
       {name:'Active', label: 'Active'},
       {name:'Done', label: 'Done'}
   ];
   
    render (){
        const {filter, onFilterChange} = this.props;
        
        const buttons = this.buttons.map (({name, label})=> {
            const isActive = filter  === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button type="button" onClick={() => onFilterChange(name)} key = {name} className={`btn ${clazz}`}>{label}</button>
            )
        })

        return (
            <div>
            <div className="searchpanelbutton btn-group" role="group" aria-label="Basic example">
                {buttons}
            </div>  
            </div> 
        );
    }
}

