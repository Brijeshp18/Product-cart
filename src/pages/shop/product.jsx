import React from 'react'

const Product = ({id,model,desc,price,image}) => {
  return (
    <div className='product'>
 <img src={image} alt='phone' />
 <div className='description'> 
<p> <b>{model}</b></p>
  <p>{desc}</p>
    <p>${price}</p>
 </div>
    <button className='addTocart'>Add to Cart</button></div>

  )
}

export default Product