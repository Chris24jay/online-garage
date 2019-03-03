import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { updateUser } from './../../dux/reducer';
import axios from 'axios'
import '../Parts/Parts.css'


class Parts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parts: [],
            cart: [], 
        }
    }

    // methods
    componentDidMount() {
        axios.get('/api/parts')
            .then(res => { this.setState({ parts: res.data }) })
    }

    handleAddButton = (ind) => {
        const {parts} = this.state
        let part = parts[ind]

        axios.post(`/api/orders`, {part})
        .then(res=> {this.setState({cart: res.data})})
        // ^^^I think I'm not displaying this anywhere on the site. Not being rendered. 
    }

    //end of methods
    render() {
        const {parts} = this.state
        let displayParts = parts.map((val, ind) => {
            return (
                <div key={ind}>
                    <div>{val.part_name}</div>
                    <div>{val.parts_id}</div>
                    <div>{val.price}</div>
                    <div><button onClick={()=>this.handleAddButton(ind)} >add</button></div>
                </div>
            )
        })

        return (
            <div class="parts-display">
                {displayParts}                
            </div>
        )
    }
}

export default Parts;