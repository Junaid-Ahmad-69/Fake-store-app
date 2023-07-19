import React from 'react'
import banner from "../../assets/lifestyle.jpg"
import styles from "./Banner.module.css"
const Banner = () => {
    return (
       <div className="position-relative">
           <img src={banner} className={styles.bannerImage} alt="banner"/>
           <div className="container">
           <div className={styles.arrival}>
               <i>New</i>
               <h1 className={styles.season}>Season Arrival</h1>
               <p>Check the Trends</p>
           </div>
           </div>
       </div>
    )
}

export default Banner
