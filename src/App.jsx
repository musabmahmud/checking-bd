import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import Navbar from './components/Navbar'

import './app.css';
import Footer from './components/Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './components/SearchBar'
import { ShopContext } from './context/ShopContext'
import { useContext } from 'react'
function App() {



  return (

    // sm:px-[5vw] md:px-[7vw] px-4 lg:px-[9vw]
    <>
      <div className='relative mx-auto px-2 lg:px-0 container'>
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Order />} />
          <Route path="*" element={<Navigate to='/' replace />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
