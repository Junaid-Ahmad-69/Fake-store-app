import {createContext, useContext, useEffect, useReducer, useState} from "react";
import Modal from "../Components/Modal/Modal";
import axios from "axios";
import {useLocation} from "react-router-dom";
import CartItem from "../Components/Modal/CartItem/CartItem";
import TotalPrice from "../Components/Modal/TotalPrice/TotalPrice";
import EmptyCart from "../Components/Modal/EmptyCart/EmptyCart";

const StoreContext = createContext();
const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
    isLoading: false,
    stock: [],
    error: "",
    selectedCategory: "",
    isOpen: false,
    product: {},
    item: [],
    productQuantity: 1,
    cartTotalPrice: 0,
}

function reduce(state, action) {
    switch (action.type) {
        case "loading":
            return {...state, isLoading: true}
        case "fetching":
            return {
                ...state, stock: action.payload, isLoading: false,
            }
        case "filterData":
            return {
                ...state, selectedCategory: action.payload
            }
        case "resetFilter":
            return {
                ...state, selectedCategory: action.payload
            }
        case "toggle":
            return {
                ...state, isOpen: (prevState) => !prevState
            }
        case "closeModal":
            return {
                ...state, isOpen: false
            }
        case "productData":
            return {
                ...state, product: action.payload
            }
        case "cartItems":
            const isExistItems = state.item.some(item => item.id === action.payload.id)
            if (!isExistItems) {
                return {
                    ...state, item: [...state.item, action.payload],
                }
            }
            return {
                ...state,
            }
        case "incProduct":
            const updatedItems = state.item.map((item) =>
                item.id === action.payload ? {...item, quantity: item.quantity + 1} : item
            );
            let newTotalPrice = updatedItems.reduce((acc, item) => {
                return acc + item.price * item.quantity;
            }, 0);
            return {
                ...state,
                item: updatedItems,
                cartTotalPrice: newTotalPrice,
            }
        case "descProduct":
            const updatedItems2 = state.item
                .map((item) =>
                    item.id === action.payload ? {...item, quantity: item.quantity - 1} : item
                ).filter((item) => item.quantity > 0)
            let newTotalPrice2 = updatedItems2.reduce((acc, item) => {
                return acc + item.price * item.quantity;
            }, 0);
            return {
                ...state,
                item: updatedItems2,
                cartTotalPrice: newTotalPrice2,
            };

        case "rejected":
            return {...state, isLoading: false, error: action.payload}
        default :
            throw new Error("Unknown action type")
    }
}


const StoreProvider = ({children}) => {
    const [{
        isLoading,
        stock,
        selectedCategory,
        isOpen,
        product,
        item,
        cartTotalPrice,
    }, dispatch] = useReducer(reduce, initialState);

    // Get the ID for URL
    const productId = useLocation();

    // Get the ID from useLocation Object
    const id = productId.pathname.split("/")[2];

    async function fetchStock() {
        dispatch({type: "loading"})
        try {
            const response = await axios.get(`${BASE_URL}/products${selectedCategory}`);
            if (!response) {
                throw new Error("Failed to fetch the data...");
            }
            dispatch({type: "fetching", payload: response.data})
        } catch (e) {
            dispatch({
                type: "rejected", payload: "There was an error while fetching the data"
            })
        }
    }

    useEffect(() => {
        fetchStock()
    }, [selectedCategory]);


    async function fetchProduct() {
        dispatch({type: "loading"})
        try {
            const response = await axios.get(`${BASE_URL}/products/${id}`);
            if (!response) throw new Error("Couldn't get product");
            const data = await response;
            dispatch({type: "productData", payload: data.data});
        } catch (e) {
            dispatch({type: "rejected", payload: "There was an error while fetching the data"})
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [id]);
    console.log(cartTotalPrice)
    return (
        <StoreContext.Provider value={{
            isOpen,
            stock,
            isLoading,
            selectedCategory,
            product,
            item,
            dispatch,
            cartTotalPrice,
        }}>

            <Modal>
                {item.map(items => <CartItem key={item.id} items={items}/>)}
                {item.length > 0 ? <TotalPrice/> : <EmptyCart/>}
            </Modal>
            {children}
        </StoreContext.Provider>
    )
}

function useStore() {
    const context = useContext(StoreContext);
    if (context === undefined) throw new Error("StoreContext use outside of Store Provider")
    return context
}

export {useStore, StoreProvider}