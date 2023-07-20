import React from 'react'
import styles from "./ProductItem.module.css"
import Spinner from "../../Spinner/Spinner";
import {useStore} from "../../../Context/Context";

const ProductItem = () => {
    const {product, isLoading} = useStore()
    return (
        <>
            {
                isLoading ? <Spinner/> :
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-6">
                                <div className="image-container">
                                    <img src={product.image} alt={product.name} width={500}/>
                                </div>
                            </div>
                            <div className="col-6">
                                <span className={styles.category}>{product.category}</span>
                                <h2 className="my-2 fs-1">{product.title}</h2>
                                <span>Rating {product?.rating?.rate} </span>
                                <div className="my-4">
                                    <h6 className="fw-bold fs-1">$ {product.price}</h6>
                                    <p className="text-dark fs-5 mb-5">{product.description}</p>
                                    <div className="d-flex align-items-center gap-5">
                                        <button className={`btn border-1 border-black shadow-md ${styles.btnGroup}`}>Add
                                            to
                                            Cart
                                        </button>
                                        <button className={`btn border-1 border-black shadow-md ${styles.btnGroup}`}>Go
                                            to
                                            Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default ProductItem
