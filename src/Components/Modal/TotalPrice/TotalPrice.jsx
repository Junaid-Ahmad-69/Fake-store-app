import React from 'react'
import {useStore} from "../../../Context/Context";

const TotalPrice = () => {
    const {cartTotalPrice} = useStore()

  return (
    <div className="mt-auto">
      <hr/>
        <h6 className="fw-bold fs-4">Total Price : ${(cartTotalPrice).toFixed(2)}</h6>
    </div>
  )
}

export default TotalPrice
