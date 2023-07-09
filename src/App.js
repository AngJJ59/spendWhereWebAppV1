import React, {useState, useEffect} from "react";

function App() {
 const [spendingItems, setSpendingItems] = useState('')

  useEffect(()=> {
    retrieveSpendingItems()
  }, [])

 const retrieveSpendingItems = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/allItems')
      const data = await response.json()

      console.log(data)

      setSpendingItems(data)

    } catch(err) {
      console.log(err.message)
    }
 }

  return (
    <div>
      <h1>Your Spending Items</h1>
      <div className="spendingItems">
        {spendingItems.length > 0 ? spendingItems.map(spendingItem => (
            <div className={
              "spendingItem" + (spendingItem.complete ? " is-complete" : "")
            } key={spendingItem._id}>
              <div className="checkbox"></div>

              <div className="text">{spendingItem.title}</div>
              <div className="text">{spendingItem.description}</div>
              <div className="text">{spendingItem.amount}</div>
              <div className="text">{spendingItem.spendingDate}</div>

              <div className="delete-spendingItem">x</div>
            </div>
          )) : (
            <p>You currently have no tasks</p>
          )}
      </div>
    </div>
  );
}

export default App;
