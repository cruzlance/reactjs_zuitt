import React from 'react';
import Card from 'react-bootstrap/Card';

import { Row, Col } from 'react-bootstrap';

//create a function that will render our new component
export default function Highlights() {
    return (
        <Row>
        {/* First Card */}
            <Col xs={12} md={4}>
                <Card className="cardHighlights">
                    <Card.Body>
                        <Card.Title>Learn From Home</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, consectetur doloribus aliquid voluptatibus illo, beatae aspernatur, sed porro, nemo id commodi. Voluptates dolor vitae ducimus, officiis fugit nisi cum, laboriosam!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        {/* Second Card */}
            <Col xs={12} md={4}>
                <Card className="cardHighlights">
                    <Card.Body>
                        <Card.Title>Study Now, Pay Later</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, consectetur doloribus aliquid voluptatibus illo, beatae aspernatur, sed porro, nemo id commodi. Voluptates dolor vitae ducimus, officiis fugit nisi cum, laboriosam!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        {/* Third Card */}
            <Col xs={12} md={4}>
                <Card className="cardHighlights">
                    <Card.Body>
                        <Card.Title>Be Part of Our Community</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, consectetur doloribus aliquid voluptatibus illo, beatae aspernatur, sed porro, nemo id commodi. Voluptates dolor vitae ducimus, officiis fugit nisi cum, laboriosam!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}