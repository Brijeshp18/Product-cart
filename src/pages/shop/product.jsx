import React, { useContext } from 'react'
import {Shopcontext} from '../../context/ShowContext'
const Product = (props) => {
  const {id,model,desc,price,image}=props.data;
  const {addToCart,cartitems}=useContext(Shopcontext)
  const cartItemAmount=cartitems[id];
  return (
    <div className='product'>
 <img src={image} alt='phone' />
 <div className='description'> 
<p> <b>{model}</b></p> 
  <p>{desc}</p>
    <p>${price}</p>
 </div>
    <button className='addToCart' onClick={()=>addToCart(id)}>Add to Cart {cartItemAmount > 0 &&  <> ({cartItemAmount})</>}</button>
    </div>

  )
}

export default Product