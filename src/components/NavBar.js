import React from 'react';
// we will now create our first react component, we first have to identify the necessary dependencies/packages needed.
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
    return(
        <Navbar className="p-4 mb-10 bg-green-300">
            <Navbar.Brand>Libing Things</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                   <Nav.Link href="#" className="px-2.5 py-2 text-gray-500 hover:text-gray-300">Home</Nav.Link> 
                   <Nav.Link href="#" className="px-2.5 py-2 text-gray-500 hover:text-gray-300">About</Nav.Link> 
                   <Nav.Link href="#" className="px-2.5 py-2 text-gray-500 hover:text-gray-300">Products</Nav.Link> 
                   <Nav.Link href="#" className="px-2.5 py-2 text-gray-500 hover:text-gray-300">Contact Us</Nav.Link> 
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

//2 kinds of exports
// export default -> these components/modules can be repackaged
// named export -> these are identified with "{}"
