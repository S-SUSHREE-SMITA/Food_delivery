import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './files/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import ContactUs from './files/Contact/Contact.jsx'
import PlacedOrder from './Pages/PlacedOrder/PlacedOrder.jsx'
import Footer from './files/Footer/Footer.jsx';
import Login from './files/Login/Login.jsx';
import Menu from './pages/Menu/Menu';

function App() {

    const [showLogin, setShowLogin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            {showLogin &&
                <Login
                    setShowLogin={setShowLogin}
                    setIsLoggedIn={setIsLoggedIn}
                />
            }

            <div className='app'>
                <Navbar
                    setShowLogin={setShowLogin}
                    isLoggedIn={isLoggedIn}
                />

                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/cart' element={<Cart />}></Route>
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path='/order' element={<PlacedOrder />}></Route>
                </Routes>

                <Footer />
            </div>
        </>
    )
}

export default App
