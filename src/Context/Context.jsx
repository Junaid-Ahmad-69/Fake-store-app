import {createContext, useContext, useEffect, useState} from "react";
import Modal from "../Components/Modal/Modal";
import axios from "axios";
import {useLocation} from "react-router-dom";
import CartItem from "../Components/Modal/CartItem/CartItem";
import TotalPrice from "../Components/Modal/TotalPrice/TotalPrice";
import EmptyCart from "../Components/Modal/EmptyCart/EmptyCart";

const StoreContext = createContext();
const BASE_URL = process.env.REACT_APP_BASE_URL;


const StoreProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [stock, setStock] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [product, setProduct] = useState({});
    const productId = useLocation();
    const id = productId.pathname.split("/")[2];
    const [item, setItem] = useState([]);


    // Remove Item duplication
    const uniqueData = item.filter((item, index, arr) => {
        return index === arr.findIndex((obj) => (
            obj.id === item.id
        ));
    });

    const handlerReset = () => {
        setSelectedCategory("")
    }

    function getItems(value) {
        setItem(item => [...item, value])
    }

    const handlerItemDelete = (id) => {
        setItem(item.filter(items=> id !== items.id))
    }

    // Calculate Total Price
    let totalPrice = uniqueData.reduce((acc, total) => {
        return acc + total.price;
    }, 0);

    // For All Data & Filter Request
    async function fetchStock() {
        try {
            setIsLoading(true);
            const response = await axios.get(`${BASE_URL}/products${selectedCategory}`);
            if (!response) {
                throw new Error("Failed to fetch the data...");
            }
            setStock(response.data)
        } catch (e) {
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchStock()
    }, [selectedCategory]);


    async function fetchProduct() {
        try {
            setIsLoading(true)
            const response = await axios.get(`${BASE_URL}/products/${id}`);
            if (!response) throw new Error("Couldn't get product");
            const data = await response;
            setProduct(data.data)
        } catch (e) {
        } finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        fetchProduct()
    }, [id]);

    return (
        <StoreContext.Provider value={{
            isOpen,
            setIsOpen,
            handlerReset,
            setSelectedCategory,
            stock,
            isLoading,
            selectedCategory,
            product,
            getItems,
            item,
            uniqueData,
            handlerItemDelete

        }}>

            <Modal onClose={() => setIsOpen(false)}>
                {uniqueData.map(items => <CartItem key={item.id}  items={items}/>)}
                {uniqueData.length > 0 ? <TotalPrice totalPrice={totalPrice}/> : <EmptyCart/>}
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






