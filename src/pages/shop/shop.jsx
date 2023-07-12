import React from 'react'
import { PRODUCTS } from '../../Product'
import Product from './product'
import './shop.css'

export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'><b>NEW STORE</b></div>
        <div className='products'>
           {PRODUCTS.map((product)=><Product id={product.id} model={product.model} desc={product.desc} price={product.price} image={product.image}/>)} 
        </div>






    </div>
  )
}
