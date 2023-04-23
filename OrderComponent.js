import React from 'react';
import NewCoffeetypeForm from './new-coffeetype-form';
import NewOrder from './NewOrder';
import{addNewCoffeetype,deleteCoffeetype} from './NewOrder';


export default class Order extends React.Component{
    render(){
        const coffeetypes=this.props.data.coffeetypes
        ? this.props.data.coffeetypes.map((coffeetype,Index)=>
        <li key={Index}>
            {coffeetype.name} 
            <button onClick={e=>
            this.props.deleteCoffeetype(e,this.props.data,coffeetype)
            }>Delete</button>
        </li>)
        :null;
        return(
            <div>
                <h1>{this.props.data.name}</h1>
                <ul>
                    {coffeetypes}
                </ul>
                <NewCoffeetypeForm
                    addNewCoffeetype={this.props.addNewCoffeetype} data={this.props.data}/>
            </div>
        );
    }
}