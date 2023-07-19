import React, {useState} from 'react'
import "./LatestItem.css"
import {CiEdit} from 'react-icons/ci';
import {GoEye} from 'react-icons/go';
import {Link} from "react-router-dom";

const LatestItem = ({stocks}) => {

    const [item, setItem] = useState({});
    const cartItems = {
        id: stocks.id,
        image: stocks.image,
        title: stocks.title,
    }

    function sendData() {
        setItem(cartItems)
    }

    return (
        <div className="card stocks-cards position-relative">
            <Link className=" text-decoration-none link-center " to={`/product/${stocks.id}`}>
                <img src={stocks.image} className="card-img-top stock-image" alt={stocks.name}/>
            </Link>

            <div className="card-body bg-light text-center">
                <p className="card-title">{stocks.title}</p>
                <p className="card-text text-decoration-none fw-bold fs-5"> $ {stocks.price}</p>
                <button className="btn cart-btn" onClick={() => {
                    sendData()
                }}>Add to Cart
                </button>
            </div>

            <div className="stock-icons">
                <div className="d-flex align-items-center flex-column gap-4">
                    <button><CiEdit/></button>
                    <Link to={`/product/${stocks.id}`}>
                        <button><GoEye/></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LatestItem
