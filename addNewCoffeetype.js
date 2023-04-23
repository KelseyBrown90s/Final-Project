import React from "react";
const ORDERS_ENDPOINT='https://mockapi.io/clone/643f266d3dee5b763e16c322';

export default function addNewCoffeetype(e,order,coffeetype) {
    addNewCoffeetype(e,order,coffeetype)
        order.coffeetype.push(coffeetype)
        const index = order.coffeetypes.indexOf(coffeetype);
        order.coffeetypes.splice(index,1);
        updateOrder(order)
        .then(()=>{
            this.setState(state => {
                for(let o of state.orders){
                    if(o._id === order._id){
                        let o = order;
                        break;
                    }
                }
                });
                return this.state;
            });
        
        e.preventDefault();
    }
    
    function updateOrder(order){
        return fetch(`${ORDERS_ENDPOINT}/${order._id}`,{
            method:'PUT',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(order)
    
        });
    }
