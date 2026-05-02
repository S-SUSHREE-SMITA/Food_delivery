import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

function Cart() {

  const { cartItems, food_list } = useContext(StoreContext);
  const navigate = useNavigate();

  let totalAmount = 0;

  return (
    <div className='cart'>

      <h2 style={{marginTop:"10px", marginBottom:"50px", textAlign:"center"}}>Your Cart</h2>

      <div className='cart-items-title'>
        <p>Item</p>
        <p>Name</p>
        <p>Price</p>
        <p>Qty</p>
        <p>Total</p>
      </div>

      <hr />

      {food_list.map((item) => {

        if (cartItems[item.id]) {

          const quantity = cartItems[item.id];
          const itemTotal = item.price * quantity;

          totalAmount += itemTotal;

          return (
            <div key={item.id}>
              <div className='cart-items-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{quantity}</p>
                <p>₹{itemTotal}</p>
              </div>
              <hr />
            </div>
          )
        }

        return null;
      })}

      <div className='cart-bottom'>
        <div className='cart-total'>

          <h3>Cart Total</h3>

          <div className='cart-total-details'>
            <p>Subtotal</p>
            <p>₹{totalAmount}</p>
          </div>

          <div className='cart-total-details'>
            <p>Delivery</p>
            <p>₹{totalAmount === 0 ? 0 : 40}</p>
          </div>

          <hr />

          <div className='cart-total-details'>
            <b>Total</b>
            <b>₹{totalAmount === 0 ? 0 : totalAmount + 40}</b>
          </div>

          <button onClick={() => navigate('/order')}>
            Proceed to Checkout
          </button>

        </div>
      </div>

    </div>
  )
}

export default Cart;