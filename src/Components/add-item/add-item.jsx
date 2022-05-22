import React,{ Component} from "react";
import "./add-item.css";

export default class AddItem extends Component {

  state = {info: ''};

  

  eTargetValue =(e)=>{
    this.setState(
      {info:e.target.value}
      )
      
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addNewItem (this.state.info);
  }
 
render (){

  

  return (
    <>
      <form
        className="bottom-panel d-flex"
          onSubmit={this.onSubmit}
        >

        <div className="d-flex">
          <input 
            type="text" 
            className="form-control input"  
            onChange={this.eTargetValue}        
            placeholder = "Новая задача"
            value={this.state.info} />
          <button 
            type="submit" 
            className="btn btn-primary"
            
          >
            Добавить
          </button>
        </div>
      </form>
    </>
  );
}
};