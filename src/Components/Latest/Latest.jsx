import React from 'react'
import styles from "./Latest.module.css"
import LatestItem from "./LatestItem/LatestItem";
import Spinner from "../Spinner/Spinner";
import {useStore} from "../../Context/Context";

const Latest = () => {
    const {handlerReset, isLoading, stock, setSelectedCategory, selectedCategory} = useStore()
    return (
        <div className="container">
            <h2 className={styles.latest}>Our New Latest Arrival</h2>
            <div className="d-flex align-items-start justify-content-between gap-4">
                <div className="d-flex align-items-center gap-4">
                    <button
                        className={selectedCategory !== "/category/men's%20clothing" ? `${styles.filterBtn}` : `${styles.activeFilter}`}
                        onClick={() => setSelectedCategory("/category/men's%20clothing")}> Men's
                    </button>
                    <button
                        className={selectedCategory !== "/category/women's%20clothing" ? `${styles.filterBtn}` : `${styles.activeFilter}`}
                        onClick={() => setSelectedCategory("/category/women's%20clothing")}> Women
                    </button>
                    <button
                        className={selectedCategory !== "/category/jewelery" ? `${styles.filterBtn}` : `${styles.activeFilter}`}
                        onClick={() => setSelectedCategory("/category/jewelery")}> Jewelery
                    </button>
                    <button
                        className={selectedCategory !== "/category/electronics" ? `${styles.filterBtn}` : `${styles.activeFilter}`}
                        onClick={() => setSelectedCategory("/category/electronics")}> Electronics
                    </button>

                </div>
                <button className={styles.resetBtn} disabled={!selectedCategory} onClick={() => handlerReset()}> Reset
                    Filter
                </button>
            </div>
            <div className="d-flex align-items-center justify-content-evenly flex-wrap gap-5 my-5">
                {isLoading ? <Spinner/> :
                    stock.map(stocks => <LatestItem stocks={stocks} key={stocks.id}/>)
                }
            </div>
        </div>
    )
}

export default Latest
