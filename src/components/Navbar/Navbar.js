import React from 'react';
import { withRouter } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { updateUser } from './../../dux/reducer'
import axios from 'axios'
import '../Navbar/Navbar.css'





function Navbar(props) {

    const handleClick = (event) => {
        if (event.target.name === '/') {
            axios.post(`/auth/logout`).then(() => {
                props.updateUser({
                    user_id: 0,
                    username: '',
                })
            }).then(() => {
                props.history.push('/')
            })

        } else { props.history.push(event.target.name) }
    }

    return (
        props.id ?
            <ButtonGroup>
                <Button varient="primary" onClick={(event) => handleClick(event)} name='/garage' >Garage</Button>
                <Button varient="primary" onClick={(event) => handleClick(event)} name='/parts' >Parts</Button>
                <Button varient="primary" onClick={(event) => handleClick(event)} name='/cart' > Cart  </Button>
                <Button variant="primary" onClick={(event) => handleClick(event)} name='/' >Logout</Button>
            </ButtonGroup>
            : null
    )
}

const mapstateToProps = (reduxState) => {
    return {
        id: reduxState.id
    }
}

const mapDispatchToProps = {
    updateUser
}

export default withRouter(connect(mapstateToProps, mapDispatchToProps)(Navbar))