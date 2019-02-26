import React from 'react';
import {Link} from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

export default function Navbar(){
    return <ButtonGroup>
        <Button><Link to='/'>Logout </Link></Button>
        <Button><Link to='/cart'>Cart </Link></Button>
        <Button><Link to='/parts'>Parts </Link></Button>
        <Link to='/garage'>Garage </Link>
        {/* <Link to='/about'>About</Link> */}
    </ButtonGroup>
}