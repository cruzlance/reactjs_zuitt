import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar ()
{
    return (

        <Navbar bg="light" expand="lg">
            
            <Navbar.Brand> React Course Booking 87 </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav"/>

            <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav className="mr-auto">

                    <Nav.Link href="#"> Home </Nav.Link>
                    <Nav.Link href="#"> About </Nav.Link>
                    <Nav.Link href="#"> Contact Us </Nav.Link>


                </Nav>

            </Navbar.Collapse>


        </Navbar>
    )
}
