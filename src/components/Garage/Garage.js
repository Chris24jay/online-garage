import React, {Component} from 'react';

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
            <div>User Garage component</div>
        )
    }
}

export default Garage;