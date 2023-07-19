import {NavLink} from "react-router-dom";
import Logo from "../../assets/logo.png"
import "./AppNav.css"
import {BsFillCartCheckFill} from "react-icons/bs";
import {useStore} from "../../Context/Context";

const AppNav = () => {
    const {setIsOpen} = useStore()
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky top-0 z-3">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src={Logo} alt="logo" width={50}/>
                    <span className="fs-6 ms-2">Fake Store</span>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex align-items-center w-100 justify-content-center gap-5 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/product">Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center gap-4">
                        <button className=" searchBtn">Login</button>
                        <button className=" searchBtn">Register</button>
                        <button className="searchBtn d-flex align-items-center justify-content-center gap-1"
                                onClick={()=>setIsOpen(true)}
                        ><BsFillCartCheckFill/> Cart(0)
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default AppNav
