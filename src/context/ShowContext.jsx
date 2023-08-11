import React, { createContext,useState } from 'react'
import { PRODUCTS } from '../Product';


export  const Shopcontext = createContext(null)
const getDefaultCart =()=>{
    let cart ={};
for (let i = 1; i< PRODUCTS.length +1 ; i++) {
  
   cart[i]=0;
    
}
return cart;
}
 export function ShowContext (props) {


  

const [cartitems, setcartItems] = useState(getDefaultCart());


const getTotalAmount=()=>{
  let totalAmount =0;
  for (const item in cartitems) {
    if (cartitems[item]>0) {
      let itemInfo=PRODUCTS.find((product)=>product.id===Number(item));
      totalAmount +=cartitems[item] * itemInfo.price
      
    }
  }return totalAmount;
} 

const addToCart =(itemId)=>{
setcartItems({...cartitems,[itemId]:cartitems[itemId]+1});
}
const removeCartItem =(itemId)=>{
setcartItems({...cartitems,[itemId]:cartitems[itemId]-1});

}
const updateCartItemCount=( newAmount,itemId)=>{
  setcartItems({...cartitems,[itemId]:newAmount})

}


const contextValue = {cartitems,addToCart,removeCartItem,updateCartItemCount,getTotalAmount};
console.log(cartitems);

  return (
    <div>

<Shopcontext.Provider value={contextValue}>

{props.children}
</Shopcontext.Provider>

    </div>
  )
}

export default ShowContext