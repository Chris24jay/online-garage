import React from 'react';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default function Navbar() {
    return (
        <ButtonGroup>
            <Button><Link to='/'>Logout </Link></Button>
            <Button><Link to='/cart'>Cart </Link></Button>
            <Button><Link to='/parts'>Parts </Link></Button>
            <DropdownButton as={ButtonGroup} title="Garage" id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1">Vehicle 1</Dropdown.Item>
                <Dropdown.Item eventKey="2">Vehicle 2</Dropdown.Item>
            </DropdownButton>
        </ButtonGroup>
        
    )
}