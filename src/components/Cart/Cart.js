import React, { Component } from 'react';
import axios from 'axios';
import '../Cart/Cart.css';


class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: []
        }
    }

    componentDidMount() {
        axios.get('/api/orders/usercart')
        .then(res => {this.setState({cart:res.data})})
    }

    handleDelete = (id) => {
        console.log('delete button hit')
        axios.delete(`/api/orders/usercart/delete/${id}`)
        .then(res => {this.setState({cart: res.data})})
    }


    
    

    render() {
        const{cart} = this.state
        console.log(cart)

        let userCart = cart.map((val, ind) => {
            return (
                <div key={ind}>
                    <div>{val.part_name}</div>
                    <div>{val.parts_id}</div>
                    <div>{val.quantity}</div>
                    <div>{val.total_price}</div>
                    <div><button>Edit</button></div>
                    <div><button onClick={()=> this.handleDelete(val.id)} >Delete</button></div>                    
                </div>
            )
        })
        return (
            <div>
                <h3>Here is your cart!</h3>
                <div class="cart-display" >
                    {userCart}
                </div>
            </div>
        )
    }
}

export default Cart;