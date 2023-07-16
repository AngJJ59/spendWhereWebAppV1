import React from 'react'
import { Modal } from 'react-bootstrap'
import CreateSpendingItemForm from './CreateSpendingItemForm'

const CreateSpendingItemModal = (props) => {
  const saveDataHandler = (inputSpendingData) => {
    const spendingData = {
       ...inputSpendingData
    }

    props.onAddSpendingItem(spendingData)

    props.onItemAdded()
  }

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Spending Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateSpendingItemForm onSaveSpendingData={saveDataHandler}/>
      </Modal.Body>
    </Modal>
  )
}

export default CreateSpendingItemModal