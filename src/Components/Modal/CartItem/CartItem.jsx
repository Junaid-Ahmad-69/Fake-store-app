import "./CartItems.css"
import {useStore} from "../../../Context/Context";

const CartItem = ({items}) => {
    const {dispatch} = useStore();

    const productPrice = (items.quantity * items.price).toFixed(2)
    return (
        <>
            <div className="d-flex align-items-center justify-content-between cart-container">
                <img src={items.image} alt={items.name} width={60} height={60} className="object-fit-contain"/>
                <div className="w-75 ms-auto">
                    <h6 className="fw-bold cart-title">{items.title}</h6>
                    <p>{items.quantity} X ${items.price} = ${productPrice}</p>
                    <div className="d-flex align-items-center gap-4">
                        <button className="btn-quantity" onClick={() => dispatch({type: "descProduct", payload: items.id})}>-
                        </button>
                        <button className="btn-quantity" onClick={() => dispatch({type: "incProduct", payload: items.id})}>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem
