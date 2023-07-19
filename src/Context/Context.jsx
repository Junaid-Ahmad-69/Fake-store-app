import {createContext, useContext, useEffect, useState} from "react";
import Modal from "../Components/Modal/Modal";
import axios from "axios";
import {useParams} from "react-router-dom";


const StoreContext = createContext();
const BASE_URL = process.env.REACT_APP_BASE_URL;


const StoreProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [stock, setStock] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('')
    const {productId} =useParams()
    console.log(productId)
    const handlerReset = () => {
        setSelectedCategory("")
    }

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
            console.log(e)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchStock()
    }, [selectedCategory]);


    return (
        <StoreContext.Provider value={{
            isOpen,
            setIsOpen,
            handlerReset,
            setSelectedCategory,
            stock,
            isLoading,
            selectedCategory


        }}>
            <Modal onClose={() => setIsOpen(false)}>Modal Open</Modal>
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






