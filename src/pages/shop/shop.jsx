import React from 'react'
import { PRODUCTS } from '../../Product'
import Product from './Product'
import './shop.css'

export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'><b>NEW STORE</b></div>
        <div className='products'>
           {PRODUCTS.map((product)=><Product data={product}/>)}   
        </div>






    </div>
  )
}
