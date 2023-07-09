import React, { useState, useEffect } from "react";

import { Button, Stack } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import OverviewCard from "./components/UI/OverviewCard";
import SpendingCard from "./components/UI/SpendingCard";

function App() {

  return (
    <Container className="">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">SpendWhere</h1>
        <Button variant="primary">Add Spending Item</Button>
      </Stack>
      <OverviewCard/>
      <div className= "mt-4" style={{display:"grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", alignItems: "flex-start"}}>
        <SpendingCard 
          title="buy things"
          description = "grocery"
          amount = "20.3"
          spendingDate= "2023-1-1"
        />
        <SpendingCard 
          title="buy things"
          description = "grocery"
          amount = "20.3"
          spendingDate= "2023-1-1"
        />
      </div>
      
    </Container>
  );
}

export default App;
