//identify the components and packages that we are going to use to build this component
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
// named exports

//create a func that will return/render our component
//variant is a property from react-bootstrap which describes the style type
export default function Banner() {
    return (
    <Row>
        <Col>
            <Jumbotron>
                <h1>Zuitt Coding Bootcamp</h1>
                <p>Opportunities for everyone, everywhere</p>
                <Button variant="info">Enroll Now!</Button>
            </Jumbotron>
        </Col>
    </Row>
    )
}