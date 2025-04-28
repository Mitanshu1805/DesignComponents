import React, { useState } from 'react'
import './style.css'
import Edit from './Assets/basil_edit-outline.png'
import Delete from './Assets/fluent_delete-48-regular.png'
import Printer from './Assets/Frame 1321315357.png'
import DownArrow from './Assets/icon-park-outline_down.png'
import DownArrow2 from './Assets/icon-park-outline_down (1).png'

const Orders = () => {
  // State to keep track of quantities
  const [quantities, setQuantities] = useState({
    item1: 2,
    item2: 2,
    item3: 2,
    item4: 2,
    item5: 2,
    item6: 2,
    item7: 2,
    item8: 2,
    item9: 2,
    item10: 2
  })

  // Function to handle quantity change
  const handleQuantityChange = (item, operation) => {
    setQuantities((prevState) => {
      const newQuantity =
        operation === 'increment'
          ? prevState[item] + 1
          : prevState[item] > 0
            ? prevState[item] - 1
            : 0 // Don't allow negative quantities
      return { ...prevState, [item]: newQuantity }
    })
  }

  const handleEditPrice = () => {
    console.log('edit price btn clicked')
  }

  const handleDeleteItem = () => {
    console.log('delete item btn clicked')
  }

  const orders = [
    { id: 'item1', name: 'CHESSE DABELI', price: 45 },
    { id: 'item2', name: 'PAV BHAJI', price: 50 },
    { id: 'item3', name: 'VADA PAV', price: 30 },
    { id: 'item4', name: 'SAMOSA', price: 20 },
    { id: 'item5', name: 'PASTA', price: 60 },
    { id: 'item6', name: 'BURGER', price: 35 },
    { id: 'item7', name: 'PIZZA', price: 80 },
    { id: 'item8', name: 'FRIED RICE', price: 40 },
    { id: 'item9', name: 'NOODLES', price: 55 },
    { id: 'item10', name: 'SPRING ROLLS', price: 25 }
    // Add more items here...
  ]

  return (
    <div className="tableContainer">
      <button className="tableNo">
        <div className="tableNumber">Table No: 1</div>
        <div className="downArrow">
          <img src={DownArrow2} alt="down arrow" />
        </div>
      </button>
      <div className="ordersContainer">
        <div className="orderContent">
          Orders #34562
          <div className="orderTypes">
            <button className="dineIn">
              <div className="dineInValue">Dine In</div>
            </button>
            <button className="pickUp">
              <div className="pickUpValue">Pick Up</div>
            </button>
            <button className="delivery">
              <div className="deliveryValue">Delivery</div>
            </button>
          </div>
          <div className="orders">
            <div className="header">
              <div className="headerContent">
                <div className="headerName">Item Name</div>
                <div className="headerQuantity">Quantity</div>
                <div className="headerPrice">Total Price</div>
              </div>
            </div>
            <div className="orderValues">
              {orders.map((order, index) => (
                <div
                  key={order.id}
                  className="item"
                  style={{ backgroundColor: index % 2 === 0 ? '#F2F2F2' : 'transparent' }} // Apply red background for every second order
                >
                  <div className="itemName">
                    <div>{order.name}</div>
                    <div>
                      Price: {order.price} <img src={Edit} alt="edit" onClick={handleEditPrice} />
                    </div>

                    {/* <div></div> */}
                  </div>

                  <div className="itemQuantity">
                    <div
                      className="minus"
                      onClick={() => handleQuantityChange(order.id, 'decrement')}
                    >
                      -
                    </div>
                    <div className="valueBox">
                      <div className="value">{quantities[order.id]}</div>
                    </div>
                    <div
                      className="plus"
                      onClick={() => handleQuantityChange(order.id, 'increment')}
                    >
                      +
                    </div>
                  </div>
                  <div className="totalPrice">
                    <div className="totalPriceValue">{quantities[order.id] * order.price} RS</div>
                    <div className="deleteItem">
                      <img src={Delete} alt="delete" onClick={handleDeleteItem} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
