import React, {Component} from 'react';
import axios from 'axios'


class Parts extends Component {
    constructor(props){
        super(props)

        this.state={
            parts: [],
        }
    }

    // methods
    // refer to react-3-mini to display parts and axios request
    componentDidMount(){
        console.log('hit2')
        axios.get(`/api/parts`)
        .then(res => {this.setState({parts: res.data})})
    }

    //end of methods
    render(){
        const {parts} = this.state
        return(
            <div>Parts component {parts} </div>
        )
    }
}

export default Parts;