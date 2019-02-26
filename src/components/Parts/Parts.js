import React, { Component } from 'react';
import axios from 'axios'
import '../Parts/Parts.css'


class Parts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parts: [],
        }
    }

    // methods
    // refer to react-3-mini to display parts and axios request
    componentDidMount() {
        axios.get('/api/parts')
            .then(res => { this.setState({ parts: res.data }) })
    }

    //end of methods
    render() {
        const { parts } = this.state
        let displayParts = parts.map((val, ind) => {
            return (
                <div key={ind}  >
                    <div>{val.parts_id}</div>
                    <div>{val.part_name}</div>
                    <div>{val.price}</div>
                    <div><button>add</button></div>
                </div>
            )
        })

        return (
            <div class="parts-display" >
                {displayParts}
            </div>

        )
    }
}

export default Parts;