import React from 'react'

const TotalPrice = ({totalPrice}) => {
  return (
    <div className="mt-auto">
      <hr/>
        <h6 className="fw-bold fs-4">Total Price : ${(totalPrice).toFixed(2)}</h6>
    </div>
  )
}

export default TotalPrice
