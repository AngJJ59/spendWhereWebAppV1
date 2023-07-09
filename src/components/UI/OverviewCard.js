import React from 'react'
import { Card } from 'react-bootstrap'

const OverviewCard = () => {
  return (
    <div className='d-flex align-items-center justify-content-center h-100'>
        <Card bg='info' className='w-100 rounded'>
            <Card.Body>
                <Card.Title className='text-center'>Spending Overview</Card.Title>
            </Card.Body>
        </Card>
    </div>
  )
}

export default OverviewCard
