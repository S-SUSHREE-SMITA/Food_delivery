import React, { useContext, useState } from 'react'
import './FoodItem.css'
import add_icon from '../../assets/add_icon.jpg'
import green_add_icon from '../../assets/green_add_icon.jpg'
import red_remove_icon from '../../assets/red_remove_icon.webp'
import { StoreContext } from '../../Context/StoreContext'

function FoodItem({ id, name, price, category, image }) {
  const {cartItems,setCartItems,addToCart,removeFromCart}=useContext(StoreContext);
  return (
    <div className='food-card'>
        <div className='food-card-img-container'>
            <img src={image} alt={name} className='food-card-img' />
            {!cartItems[id]
            ?<img src={add_icon} className='add' onClick={()=>addToCart(id)}></img>
            :<div className='food-item-counter'>
              <img src={red_remove_icon} onClick={()=>removeFromCart(id)}></img>
              <p>{cartItems[id]}</p>
              <img src={green_add_icon} onClick={()=>addToCart(id)}></img>
            </div>
            }
        </div>

        <div className='food-card-body'>
            <h3 className='food-card-title'>{name}</h3>
            <p className='food-card-price'>₹{price}</p>
        </div>
    </div>
  )
}

export default FoodItem