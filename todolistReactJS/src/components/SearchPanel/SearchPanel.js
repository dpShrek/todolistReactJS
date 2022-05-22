import React, { Component } from "react";
import './SearchPanel.css';
import SearchPanelButton from '../SearchPanelButton/SearchPanelButton';

export default class SearchPanel extends Component {

    state = {
      term:''
    }

    onSearchChenge = (e) => {
      const term = e.target.value;
      this.setState ({term});
      this.props.onSearchChenge (term);
  };

    render () {
      return (
    <div className="searchpanel">
        <div className="form-floating mb-3">
          <input 
                type="Text" 
                className="form" 
                placeholder="Search"
                onChange={this.onSearchChenge}
                value= {this.state.term}/>
         </div>
    </div>
  )};
};
