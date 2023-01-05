/* eslint-disable array-callback-return */
// import logo from './logo.svg';
import './styles/App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Order } from './pages/order';
import { Cart } from './pages/cart';
import { NavBar } from './Components/NavBar';

export const getDatas = () => {
  let newCart = JSON.parse(localStorage.getItem('CART_DETAILS'))
  if(newCart === null) return []
  else return newCart
}

export let cart = getDatas()

export const price = (cart) => {
  let sum = 0;
  cart.map(item => {
    sum += parseInt(item.price) * item.quantity
  })

  return (Math.round(sum * 100)/100).toFixed(2)
}

export const updateCart = (Cart, setCart) => {
  cart = Cart
  setCart(cart)
  localStorage.setItem('CART_DETAILS', JSON.stringify(cart))
  localStorage.setItem('TOTAL_PRICE', price(cart));
}

function App() {
  let [cartItems, setCartItems] = useState(getDatas())

  return (
    <>
      <NavBar notifyCount={ cartItems.length } />

      <Routes>
        <Route path='/' />
        <Route path='/order-now' element={<Order setCart={ setCartItems } />} />
        <Route path='/cart' element={<Cart setCart={ setCartItems } />} />
      </Routes>
    </>
  )
}

export default App;
