import React from 'react'
import SpendingCard from '../UI/SpendingCard'

const SpendingItem = (props) => {
  return (
    <SpendingCard
        key={props.id}
        title={props.title}
        description = {props.description}
        amount = {props.amount}
        spendingDate = {props.spendingDate}
    />
  )
}

export default SpendingItem