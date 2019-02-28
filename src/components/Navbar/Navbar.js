import React from 'react';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
// import Dropdown from 'react-bootstrap/Dropdown'
import '../Navbar/Navbar.css'

export default function Navbar() {
    return (
        <ButtonGroup>
            <Button varient="primary" ><Link to='/'>Logout </Link></Button>
            <Button varient="primary" ><Link to='/cart'>Cart </Link></Button>
            <Button varient="primary" ><Link to='/parts'>Parts </Link></Button>
            <Button varient="primary" ><Link to='/garage'>Garage </Link></Button>
            {/* <Link to='/about'>About</Link> */}
        </ButtonGroup>        
    )
}