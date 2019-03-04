import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';
import '../Cart/Cart.css';


class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: [],
            editMode: [],
            amount:0
        }
    }

    componentDidMount=async()=> {
        const res = await axios.get('/api/orders/usercart')
        console.log(res)
        let cart = res.data
        let amount = 0 
        for(let i=0; i<cart.length; i++){
            cart[i].editMode = false
            amount = amount + (cart[i].quantity*cart[i].total_price)
        }
        console.log(cart)
        this.setState({cart: cart,amount:amount})
    }

    onToken = (token) => {
        token.card = void 0;
        axios.post('/api/payment', { token, amount: this.state.amount }).then(response => {
            axios.delete()
        });
    }

    handleDelete = (id) => {
        console.log('delete button hit')
        
        axios.delete(`/api/orders/usercart/delete/${id}`)
            .then(res => this.setState({ cart: res.data, editMode: false }))
            .catch(err => { console.log('did not work') })
        
        this.componentDidMount()
    }

    handleEdit = (i) => {
        console.log('edit button hit')
        let cart = this.state.cart.slice()
        let cartItem = {...cart[i]}
        cartItem.editMode = true
        cart.splice(i, 1, cartItem)
        this.setState({cart: cart})
    }

    handleUpdate = async (i) => {
        let cart = this.state.cart.slice()
        let cartItem = {...cart[i]}
        cartItem.editMode = false
        cart.splice(i, 1, cartItem)
        const updateCart = await axios.put(`/api/orders/usercart/update`, {id:cartItem.id, quantity:cartItem.quantity})
        let amount = 0
        for(let i=0; i<cart.length; i++){
            amount = amount + (cart[i].quantity*cart[i].total_price)
        }

        this.setState({cart: cart,amount:amount})


    }

    handleChangeQty = (val,i) => {
        let cart = this.state.cart.slice()
        let cartItem = {...cart[i]}
        cartItem.quantity = val
        cart.splice(i, 1, cartItem)
        this.setState({cart: cart})
    }


    


    render() {
        let {cart} = this.state
               
        let userCart = cart.map((val, ind) => {
            
            if(val.editMode){
                return (
                    <div key={ind}>
                        <div>{val.part_name}</div>
                        <div>{val.parts_id}</div>
                        <div>{val.quantity}</div>
                        <div>{val.total_price*val.quantity}</div>
    
                        <input placeholder= "Qty" onChange={(e) => this.handleChangeQty(e.target.value, ind)} value={val.quantity} />
                        <div><button onClick={()=> {this.handleUpdate(ind)}}
                        >Update</button></div>
    
                        <div><button onClick={() => this.handleDelete(val.id)} >Delete</button></div>
                    </div>
                )
            }    
            return (

                <div key={ind}>
                    <div>{val.part_name}</div>
                    <div>{val.parts_id}</div>
                    <div>{val.quantity}</div>
                    <div>{val.total_price*val.quantity}</div>

                    <div><button onClick={() => this.handleEdit(ind)} >Edit</button></div>

                    <div><button onClick={() => this.handleDelete(val.id)} >Delete</button></div>
                </div>
            )
        })

        // let updateQty = cart.map((val, ind) => {
        //     return (
        //         <div key={ind}>
        //             <div>{val.part_name}</div>
        //             <div>{val.parts_id}</div>
        //             <div>{val.quantity}</div>
        //             <div>{val.total_price}</div>

        //             <input placeholder= "Qty" />
        //             <div><button onClick={this.handleUpdate} >Update</button></div>

        //             <div><button onClick={() => this.handleDelete(val.id)} >Delete</button></div>
        //         </div>
        //     )
        // })
        return (
            <div>
                <h3>Here is your cart!</h3>
                <div class="cart-display" >
                    {userCart}
                    <p>Amount:{this.state.amount}</p>
                    <StripeCheckout
                       token={this.onToken}
                       stripeKey={process.env.REACT_APP_STRIPEKEY}
                       amount={this.state.amount*100}
                   /> 
                </div>
            </div>
        )
    }
}

export default Cart;