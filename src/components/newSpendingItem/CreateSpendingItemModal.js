import React from 'react'
import { Modal } from 'react-bootstrap'
import CreateSpendingItemForm from './CreateSpendingItemForm'

const CreateSpendingItemModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
        <CreateSpendingItemForm />
    </Modal>
  )
}

export default CreateSpendingItemModal