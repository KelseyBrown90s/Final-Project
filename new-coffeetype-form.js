import React from 'react';
import {addNewCoffeetype} from './NewOrder';





export default class NewCoffeetypeForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nameValue: '',
        }
        this.handleNameChange =this.handleNameChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    handleNameChange(e){
        this.setState({nameValue: e.target.value});
    }
    handleClick(e){
        //have been having trouble with addNewCoffeetype being said that it is not a function.
        this.props.addNewCoffeetype(e,this.props.data,
        {name:this.state.nameValue});
        this.setState({nameValue:''});
         
              

      }
    render(){
        return(
            <div>
                <input type='text' placeholder='Name' onChange={this.handleNameChange} value={this.setState.nameValue}/>
                <button onClick={this.handleClick}>Submit</button>
            </div>
            
        );
    }
}