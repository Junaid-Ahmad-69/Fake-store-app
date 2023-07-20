import {Route, Routes} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import AppNav from "./Components/AppNav/AppNav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./Components/Product/Product";
import {StoreProvider} from "./Context/Context";


const App = () => {
    return (
        <>
            <StoreProvider>
                <AppNav/>
                <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/product/:productId' element={<Product/>}/>
                </Routes>
            </StoreProvider>

        </>
    )
}

export default App
