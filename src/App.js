// import logo from './logo.svg';
import './styles/App.css';
import React, { useState } from 'react';
import { NavBar } from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Order } from './pages/order';
import { Cart } from './pages/cart';

export const getDatas = () => {
  let newCart = JSON.parse(localStorage.getItem('CART_DETAILS'))
  if(newCart === null) return []
  else return newCart
}

export let cart = getDatas()

export const updateCart = (Cart, setCart) => {
  cart = Cart
  setCart(cart)
  localStorage.setItem('CART_DETAILS', JSON.stringify(cart))
}

function App() {
  let [cartItems, setCartItems] = useState(getDatas())

  return (
    <>
      <NavBar notifyCount={ cartItems.length } />

      <Routes>
        <Route path='/' element={<Order setCart={ setCartItems } />} />
        <Route path='/cart' element={<Cart setCart={ setCartItems } />} />
        {/* <Route path='/order-now' element={<Order />} /> */}
      </Routes>
    </>
  )
}

export default App;
