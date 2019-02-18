import React, {Component} from 'react';

class Cart extends Component {
    constructor(props){
        super(props)

        this.state={
            userid: null,
            cart: []
        }
    }

    //methods
    //end of methods
    render(){
        return(
            <div>Cart
             component </div>
        )
    }
}

export default Cart;