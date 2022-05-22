import React, {Component} from "react";
import "./search.css";

export default class Search extends Component {
  state = {
    term:''
  }

  eTargetValue = (e) => {
    const term = e.target.value
    this.setState({term});
    this.props.onSearchCheng (term);
  }
    
  
  render () {
  return (
    <div className="search-panel">
      <div className="search-panel__input">
        <input
          type="text"
          className="form-control"
          placeholder="Поиск"
          value={this.state.term}
          onChange={this.eTargetValue} 
        />
      </div>
    </div>
  );
};
};
