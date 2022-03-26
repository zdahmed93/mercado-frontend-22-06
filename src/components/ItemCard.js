import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ItemCard({ item }) {
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-2'>
            <Card>
                <Card.Img variant="top" src={item.photo} height={150} style={{objectFit: 'contain'}} />
                <Card.Body>
                    <Card.Title> {item.title} </Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Card.Text>
                        {item.price}
                    </Card.Text>
                    <Button variant="primary" className='w-100'>Details</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemCard