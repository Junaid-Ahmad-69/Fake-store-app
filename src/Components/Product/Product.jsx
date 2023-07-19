import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import ProductItem from "./ProductItem/ProductItem";

const BASE_URL = process.env.REACT_APP_BASE_URL
const Product = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState({});
    const {productId} = useParams();

    async function fetchProduct() {
        try {
            setIsLoading(true)
            const response = await axios.get(`${BASE_URL}/products/${productId}`);
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
    }, []);
    return (
        <ProductItem isLoading={isLoading} products={product}/>
    )
}

export default Product
