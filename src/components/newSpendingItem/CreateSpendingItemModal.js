import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import CreateSpendingItemForm from './CreateSpendingItemForm'

const CreateSpendingItemModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Spending Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateSpendingItemForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
    </Modal.Footer>
    </Modal>
  )
}

export default CreateSpendingItemModal