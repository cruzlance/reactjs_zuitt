import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Course() {
    return (
    <div className="mt-4">
            <Card className="cardHighlights">
                <Card.Body>
                    <Card.Title><h4>Course Name</h4></Card.Title>
                    <Card.Subtitle>₱ 3000</Card.Subtitle>
                    <Card.Text>
                    </Card.Text>
                    <Button variant="info">Enroll</Button>
                </Card.Body>
            </Card>
    </div>
    )
}