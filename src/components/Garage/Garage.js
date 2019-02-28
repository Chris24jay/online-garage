import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Garage/Garage.css';

// import Navbar from 'react-bootstrap/Navbar'

class Garage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            garageId: [],
            garage: [],
            vehicles: [],
        };
    }

    handleAddVehicle = () => {
        axios.get(`/api/vehicles`)
            .then(res => { this.setState({ vehicles: res.data }) })
    }

    handleAddButton = () => {
        //axios.post 
        //adds the vehicle to vehicle table
        console.log('added')
    }

    //methods
    //end of methods
    render() {
        const { vehicles } = this.state

        let displayVehicles = vehicles.map((val, ind) => {
            return (
                <div key={ind} >
                    <div>{val.year}</div>
                    <div>{val.make}</div>
                    <div>{val.model}</div>
                    <div><button onClick={this.handleAddButton} >add</button></div>
                </div>
            )
        })

        return (
            <div>
                <button onClick={this.handleAddVehicle}>
                    Add Vehicle
                </button>
                <div class="vehicle-display" >
                    {displayVehicles}
                </div>

                <Link to='/parts' >Browse Parts</Link>
            </div>
        )
    }
}

export default Garage;