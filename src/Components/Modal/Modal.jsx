import React from "react";
import ReactDom from "react-dom";
import {useStore} from "../../Context/Context";
import styles from "./Modal.module.css"

const Modal = ({children}) => {
    const {isOpen, dispatch} = useStore()
    if (!isOpen) return null;
    return ReactDom.createPortal(
        <>
            <div className={styles.overlay}/>
            <div className={styles.modalStyle}>
                <button className={styles.close} onClick={() => dispatch({type: "closeModal"})}>&times;</button>
                {children}
            </div>
        </>,
        document.getElementById("portal")
    );
};


export default Modal;
