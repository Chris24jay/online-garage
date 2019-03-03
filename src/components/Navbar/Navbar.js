import React from 'react';
import { withRouter } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Button } from 'react-bootstrap';
import '../Navbar/Navbar.css'




function Navbar(props) {

    const handleClick = (event) => {
        props.history.push(event.target.name)
        console.log(props)
    }

    return (
        <ButtonGroup>
            <Button varient="primary" onClick={(event) => handleClick(event)} name='/garage' >Garage</Button>
            <Button varient="primary" onClick={(event) => handleClick(event)} name='/parts' >Parts</Button>
            <Button varient="primary" onClick={(event) => handleClick(event)} name='/cart' > Cart  </Button>
            <Button variant="primary" onClick={(event) => handleClick(event)} name='/' >Logout</Button>            
        </ButtonGroup>        
    )
}

export default withRouter(Navbar)