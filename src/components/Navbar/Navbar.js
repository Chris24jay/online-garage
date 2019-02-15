import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(){
    return <div>
        <Link to='/cart'>Cart </Link>
        <Link to='/garage'>Garage </Link>
        <Link to='/parts'>Parts </Link>
        <Link to='/'>Logout </Link>
        {/* <Link to='/about'>About</Link> */}
    </div>
}