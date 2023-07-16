import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CreateSpendingItemForm = (props) => {
  const [enteredInput, setEnteredInput] = useState({
    enteredTitle: '',
    enteredDescription: '',
    enteredAmount: '',
    enteredSpendingDate: ''
  })

  const handleTitleChange = (event) => {
      setEnteredInput((prevState) => {
        return {
          ...prevState,
          enteredTitle: event.target.value
        }

      })
  }

  const handleDescriptionChange = (event) => {
      setEnteredInput((prevState) => {
        return {
          ...prevState,
          enteredDescription: event.target.value
        }

      })
  }

  const handleAmountChange = (event) => {
      setEnteredInput((prevState) => {
        return {
          ...prevState,
          enteredAmount: event.target.value
        }

      })
  }

  const handleSpendingDateChange = (event) => {
      setEnteredInput((prevState) => {
        return {
          ...prevState,
          enteredSpendingDate: new Date(event.target.value)
        }

      })
  }

  const handleSubmit = (e)  => {
      e.preventDefault()
      
      const enteredData = {enteredInput}

      props.onSaveSpendingData(enteredData)
      // console.log(enteredData)

  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
         type="text"
         name='title'
         placeholder="Enter the spending title..." 
         onChange={handleTitleChange}
         value={enteredInput.enteredTitle}
         required
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
         type="text"
         name='description'
         onChange={handleDescriptionChange}
         placeholder="Enter description..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAmount">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type='number'
          name='amount'
          placeholder='Enter Amount...'
          required
          onChange={handleAmountChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formSpendingDate">
        <Form.Label>Spending Date</Form.Label>
        <Form.Control
          type='date'
          name='date'
          placeholder='Enter date...'
          onChange={handleSpendingDateChange}
        />
      </Form.Group>
      <div className='d-flex align-items-center justify-content-center'>
        <Button variant="primary" type="submit">
          Add Item
        </Button>
      </div>
    </Form>
);
}

export default CreateSpendingItemForm