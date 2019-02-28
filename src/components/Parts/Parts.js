import React, { Component } from 'react';
import Cart from '../Cart/Cart';
import axios from 'axios'
import '../Parts/Parts.css'


class Parts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parts: [],
            shoppingCart: ['stuff', 'stuff 2'], 
        }
    }

    // methods
    componentDidMount() {
        axios.get('/api/parts')
            .then(res => { this.setState({ parts: res.data }) })
    }

    handleAddButton = () => {
        console.log(this.state.parts)
        console.log('add')
    }

    //end of methods
    render() {
        const { parts } = this.state
        let displayParts = parts.map((val, ind) => {
            return (
                <div key={ind} >
                    <img src={val.image} alt='' />
                    <div>{val.parts_id}</div>
                    <div>{val.part_name}</div>
                    <div>{val.price}</div>
                    <div><button onClick={this.handleAddButton} >add</button></div>
                </div>
            )
        })

        return (
            <div class="parts-display" >
                {displayParts}
                <Cart shoppingCart = {this.state.shoppingCart} />
            </div>

        )
    }
}

export default Parts;