import React, {useContext} from 'react'
import {Shopcontext} from '../../context/ShowContext'
export function Cartitems(props) {
    const {id,model,desc,price,image}=props.data;
    const {cartitems,removeCartItem,addToCart,updateCartItemCount}=useContext(Shopcontext);
  return (
   
    <div className='cartItem' >
        <img src={image} alt='imageproduct'/> 
        <div className="description">
           <p><b>{model}</b></p> 
           <p>{desc}</p> 
           <p>${price}</p>
           <div className="countHandler">
            <button onClick={()=>addToCart(id)}>+</button>
            <input value={cartitems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)} />
            <button onClick={()=>removeCartItem(id)}>-</button>
           </div>
        </div>
    </div>
  )
}

export default Cartitems