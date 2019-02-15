import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Garage extends Component {
    constructor(props){
        super(props)

        this.state={
            garageId: null,
            vehicles: [],
        };
    }

    //methods
    //end of methods
    render(){
        return(
            <div>
                User Garage component
                <Link to='/parts' >Browse Parts</Link>
            </div>
        )
    }
}

export default Garage;