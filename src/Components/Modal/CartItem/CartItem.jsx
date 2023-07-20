import "./CartItems.css"
import {useState} from "react";
import {useStore} from "../../../Context/Context";

const CartItem = ({items}) => {

    const {handlerItemDelete} = useStore()
    const [quantity, setQuantity] = useState(1)
    const productPrice = (quantity * items.price).toFixed(2)

    const handlerAddProduct = () => {
        setQuantity(quantity + 1)
    }
    const handlerRemoveProduct = () => {
        if (quantity > 0)  setQuantity(quantity - 1)
        if(quantity === 1)  return handlerItemDelete(items.id)
    }

    return (
        <>
            <div className="d-flex align-items-center justify-content-between cart-container">
                <img src={items.image} alt={items.name} width={60} height={60} className="object-fit-contain"/>
                <div className="w-75 ms-auto">
                    <h6 className="fw-bold cart-title">{items.title}</h6>
                    <p>{quantity} X ${items.price} = ${productPrice}</p>
                    <div className="d-flex align-items-center gap-4">
                        <button className="btn-quantity" onClick={handlerRemoveProduct}>-</button>
                        <button className="btn-quantity" onClick={handlerAddProduct}>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem
