import React from 'react'
import {CiShoppingCart} from "react-icons/ci";

const EmptyCart = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100 gap-5 flex-column">
            <p className="fs-2 opacity-75">Cart Bucket Empty</p>
            <CiShoppingCart size={300} className="opacity-50"/>
        </div>
    )
}

export default EmptyCart
