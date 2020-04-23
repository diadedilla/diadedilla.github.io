import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './nav.css';
import './main.css';

export default class Navigation extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Brand href='/' style={{paddingLeft: '5vw'}}>
                    <img 
                        alt=''
                        src='assets/logo.png'
                        className='d-inline-block align-center brand-image'
                    />
                </Navbar.Brand>
                {/* <Navbar.Collapse id='responsive-navbar-nav'> */}
                <Nav className='ml-auto' style={{paddingRight: '50px'}}>
                    <Nav.Link href='/'>about</Nav.Link>
                    <Nav.Link href='/recipes'>recipes</Nav.Link>
                </Nav>
                {/* </Navbar.Collapse> */}
            </Navbar>
        )
    }
}