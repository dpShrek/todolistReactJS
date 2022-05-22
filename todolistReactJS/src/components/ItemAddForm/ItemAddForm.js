import React, { Component } from "react";
import './ItemAddForm.css';


export default class ItemAddForm extends Component {
   
    state = {
        label: ''
    }

    onLabelChenge = (e) => {

        this.setState ({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);

        this.setState({
            label:''
        });
    }
   
    render () {
        return(
            <form className="item-add-form"
                onSubmit = {this.onSubmit}>
                <div className="item-add-form-div">
                
                <input type="text"
                        className="form-control"
                        onChange={this.onLabelChenge}
                        placeholder = "Новая задача"
                        value={this.state.label}/>
                
                <button type="submit" className="btn btn-outline-secondary">Добавить</button>

            </div></form>
        )
    }
}