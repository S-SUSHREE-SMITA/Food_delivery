import React, { useContext } from 'react'
import './PlacedOrder.css'
import { StoreContext } from '../../Context/StoreContext'

function PlacedOrder() {

  const { cartItems, food_list } = useContext(StoreContext)

  let totalAmount = 0

  return (
    <div className='place-order'>

      <div className='place-order-left'>
        <h2>Delivery Details</h2>

        <input type='text' placeholder='Full Name' />
        <input type='text' placeholder='Address' />
        <input type='text' placeholder='City' />
        <input type='text' placeholder='State' />
        <input type='text' placeholder='Phone Number' />
      </div>

      <div className='place-order-right'>

        <h2>Order Summary</h2>

        {food_list.map((item) => {

          if (cartItems[item.id]) {

            const quantity = cartItems[item.id]
            const itemTotal = item.price * quantity

            totalAmount += itemTotal

            return (
              <div key={item.id} className='order-item'>
                <p>{item.name} x {quantity}</p>
                <p>₹{itemTotal}</p>
              </div>
            )
          }

          return null
        })}

        <hr />

        <div className='order-row'>
          <p>Subtotal</p>
          <p>₹{totalAmount}</p>
        </div>

        <div className='order-row'>
          <p>Delivery</p>
          <p>₹{totalAmount === 0 ? 0 : 40}</p>
        </div>

        <hr />

        <div className='order-row'>
          <b>Total</b>
          <b>₹{totalAmount === 0 ? 0 : totalAmount + 40}</b>
        </div>

        <button className='place-order-btn'>Place Order</button>

      </div>

    </div>
  )
}

export default PlacedOrder