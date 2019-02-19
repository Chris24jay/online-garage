import React, {Component} from 'react';
import axios from 'axios'


class Parts extends Component {
    constructor(props){
        super(props)

        this.state={
            parts: [],
        }
    }

    //methods
    // componentDidMount(){
    //     axios.get(`/api/parts`)
    // }

    //end of methods
    render(){
        return(
            <div>Parts component </div>
        )
    }
}

export default Parts;