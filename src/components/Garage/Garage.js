import React, { Component } from 'react';
import VehicleSelect from '../Modals/VehicleSelect';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from './../../dux/reducer';
import axios from 'axios';
import '../Garage/Garage.css';

// import Navbar from 'react-bootstrap/Navbar'

class Garage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: [],
            vehicles: [],
            modalShow: false,
            
        };
    }

    componentDidMount() {
        const { id } = this.props;
        if (!id) {
            axios.get(`/api/user`)
                .then(res => {
                    this.props.updateUser(res.data)
                })
                .catch(err => {
                    // this.props.history.push('/')
                })
        }
    }

    handleAddVehicle = () => {
        axios.get(`/api/vehicles`)
            .then(res => {
                this.setState({
                    modalShow: true,
                    vehicles: res.data,
                })
            })
    }

    handleAddButton = () => {
        //axios.post 
        //adds the vehicle to vehicle table
        console.log('added')
    }

    //methods
    //end of methods
    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <div>
                <button onClick={this.handleAddVehicle}>
                    Add Vehicle
                </button>
                {/* <div class="vehicle-display" >
                    {displayVehicles}
                </div> */}
                <VehicleSelect
                    show={this.state.modalShow}
                    onHide={modalClose}
                    getVehicles = {this.state.vehicles}
                />

                {/* <Link to='/parts' >Browse Parts</Link> */}
            </div>
        )
    }
}

const mapToProps = reduxState => {
    const { id, username } = reduxState;
    return {
        id,
        username,
    }
}

const dispatch = {
    updateUser
}

export default connect(mapToProps, dispatch)(Garage);