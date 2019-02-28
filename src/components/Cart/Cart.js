import React, { Component } from 'react';


class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: []
        }
    }
    render() {
        const {cart} = this.state
        console.log(cart)
        return (
            <div>
                Cart
                component
            </div>
        )
    }
}

export default Cart;