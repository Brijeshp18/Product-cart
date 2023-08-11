import React,{useContext} from 'react'
import { PRODUCTS } from '../../Product'
import {Shopcontext} from '../../context/ShowContext'
import {Cartitems} from './Cartitems'
import './cart.css'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const {cartitems,getTotalAmount}=useContext(Shopcontext);
  const totalAmount =getTotalAmount()
  const navigate=useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>

      </div>
      <div className="cartItems">
        {PRODUCTS.map((products)=>{if (cartitems[products.id] >0){return <Cartitems data={products}/>}})}
          
        
      </div>
      {totalAmount > 0 ?
      <div className="checkout">
        <p>Subtotal : ${totalAmount}</p>
        <button onClick={()=>navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div> :<h1>Your cart is empty</h1>}
    </div>
  )
}
