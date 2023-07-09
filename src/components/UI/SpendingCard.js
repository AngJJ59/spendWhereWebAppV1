import React from 'react'

import { Button, Card, Stack } from 'react-bootstrap'

const SpendingCard = (props) => {
  return (
    <Card className='card text-center rounded'>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                <div>{props.description}</div>
                <div>{props.amount}</div>
                <div>{props.spendingDate}</div>
            </Card.Text>
            <Stack direction='horizontal' className='mt-4 justify-content-center' gap= "2">
                <Button variant='outline-primary' className='mc-auto'>Edit</Button>
                <Button variant='outline-danger' className='mc-auto'>Delete</Button>
            </Stack>
        </Card.Body>
    </Card>
  )
}

export default SpendingCard