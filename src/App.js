import React, { useState, useEffect } from "react";

import { Button, Stack } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import OverviewCard from "./components/UI/OverviewCard";
import SpendingItem from "./components/SpendingItems/SpendingItem";
import CreateSpendingItemModal from "./components/newSpendingItem/CreateSpendingItemModal";

function App() {
  const [spendingItems, setSpendingItems] = useState('')
  const [showCreateItemModal, setShowCreateItemModal] = useState(false)

  useEffect(() => {
    retrieveSpendingItemsFromServer()
  }, [])

  const addSpendingItemHandler = (spendingItem) => {
    console.log('in app.js', spendingItem)
  }

  const retrieveSpendingItemsFromServer = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/allItems')

      const data = await response.json()
  
      setSpendingItems(data)
    } catch(err) {
      console.log(err.message)
    }
  }



  const deleteSpendingItemHandler = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:5001/api/spendingItem/delete/${itemId}`, {
        method: 'DELETE'
      })      
      
      if (!response.ok) {
        throw new Error('Failed to delete item');
      }

      // update the ui 
      setSpendingItems((spendingItems) =>
        spendingItems.filter((spendingItem) => spendingItem._id !== itemId)
      );

      console.log('Item deleted');
    } catch (err) {
      console.log(err.message);
    }
  };
  
  const openCreateItemModal = () => {
    setShowCreateItemModal(true)
  }

  const closeCreateItemModal = () => {
    setShowCreateItemModal(false)
  }

  return (
    <Container className="">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">SpendWhere</h1>
        <Button variant="primary" onClick={openCreateItemModal}>Add Spending Item</Button>
      </Stack>
      <OverviewCard/>
      <div className= "mt-4" style={{display:"grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", alignItems: "flex-start"}}>
        {spendingItems.length > 0 ? spendingItems.map(spendingItem => (
          <SpendingItem
            key={spendingItem._id}
            title={spendingItem.title}
            description={spendingItem.description}
            amount ={spendingItem.amount}
            spendingDate={spendingItem.spendingDate}
            onDelete={() => {deleteSpendingItemHandler(spendingItem._id)}}
          />
        )):(
            <div className="d-flex align-items-center justify-content-center h-100">
              <h3>No Records Found.</h3> 
            </div>
        )}
      </div>
      
      <CreateSpendingItemModal show={showCreateItemModal} onHide={closeCreateItemModal} onAddSpendingItem={addSpendingItemHandler}/>
    </Container>
  );
}

export default App;