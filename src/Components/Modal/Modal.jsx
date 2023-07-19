import React from "react";
import ReactDom from "react-dom";
import {useStore} from "../../Context/Context";
import styles from "./Modal.module.css"

const Modal = ({children, onClose}) => {
    const {isOpen} = useStore();
    if (!isOpen) return null;
    return ReactDom.createPortal(
        <>
            <div className={styles.overlay}/>
            <div className={styles.modalStyle}>
                <button onClick={onClose}>Close Modal</button>
                {children}
            </div>
        </>,
        document.getElementById("portal")
    );
};


export default Modal;
