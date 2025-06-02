import React, { useState } from 'react'
import Edit from './Assets/basil_edit-outline.png'
import Delete from './Assets/fluent_delete-48-regular.png'
import DownArrow2 from './Assets/icon-park-outline_down (1).png'
import './style.css'

type OrdersProps = {
  orderItems: any[]
  setOrderItems: React.Dispatch<React.SetStateAction<any[]>>
  onRemoveItem: (itemId: string | number) => void
}

const Orders = ({ orderItems, setOrderItems, onRemoveItem }: OrdersProps) => {
  const [showTableDropdown, setShowTableDropdown] = useState(false)
  // const [selectedOrderTypes, setSelectedOrderTypes] = useState<string[]>([])
  const [selectedOrderType, setSelectedOrderType] = useState<string | null>(null)

  // const handleOrderTypeClick = (type: string) => {
  //   setSelectedOrderTypes((prev) =>
  //     prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
  //   )
  // }
  const handleOrderTypeClick = (type: string) => {
    setSelectedOrderType((prev) => (prev === type ? null : type))
  }

  const handleQuantityChange = (itemId: string | number, operation: 'increment' | 'decrement') => {
    setOrderItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.item_id === itemId) {
            const newQuantity = operation === 'increment' ? item.quantity + 1 : item.quantity - 1
            return { ...item, quantity: newQuantity }
          }
          return item
        })
        .filter((item) => item.quantity > 0) // Remove item if quantity is 0
    })
  }

  const handleEditPrice = (item: any) => {
    console.log('Edit price for item:', item)
    // Add modal or inline edit here
  }

  return (
    <div className="tableContainer">
      <button className="tableNo" onClick={() => setShowTableDropdown((prev) => !prev)}>
        <div className="tableNumber">Table No: 1</div>
        <div className="downArrow">
          <img src={DownArrow2} />
        </div>
      </button>
      {showTableDropdown && (
        <div className="tableDropdown">
          <div className="tableOption">Table No: 2</div>
          <div className="tableOption">Table No: 3</div>
          <div className="tableOption">Table No: 4</div>
        </div>
      )}

      <div className="ordersContainer">
        <div className="orderContent">
          Orders #34562
          <div className="orderTypes">
            {['dineIn', 'pickUp', 'delivery'].map((type) => (
              <button
                key={type}
                className={`${type} ${selectedOrderType === type ? 'active' : ''}`}
                onClick={() => handleOrderTypeClick(type)}
              >
                <div className={`${type}Value`}>
                  {type === 'dineIn' ? 'Dine In' : type === 'pickUp' ? 'Pick Up' : 'Delivery'}
                </div>
              </button>
            ))}
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
              {orderItems.map((item, index) => {
                const quantity = item.quantity || 1
                const itemPrice = parseFloat(item.price as string) || 0
                const total = quantity * itemPrice

                return (
                  <div
                    key={item.item_id}
                    className="item"
                    style={{ backgroundColor: index % 2 === 0 ? '#F2F2F2' : 'transparent' }}
                  >
                    <div className="itemName">
                      <div>{item.item_name}</div>
                      <div>
                        Price: ₹{itemPrice}
                        <img
                          src={Edit}
                          className="editIcon"
                          onClick={() => handleEditPrice(item)}
                        />
                      </div>
                    </div>

                    <div className="itemQuantity">
                      <div
                        className="minus"
                        onClick={() => handleQuantityChange(item.item_id, 'decrement')}
                      >
                        -
                      </div>
                      <div className="valueBox">
                        <div className="quantityValue">{quantity}</div>
                      </div>
                      <div
                        className="plus"
                        onClick={() => handleQuantityChange(item.item_id, 'increment')}
                      >
                        +
                      </div>
                    </div>

                    <div className="totalPrice">
                      <div className="totalPriceValue">{total.toFixed(2)} ₹</div>
                      <div className="deleteItem">
                        <img
                          src={Delete}
                          className="deleteIcon"
                          onClick={() => onRemoveItem(item.item_id)}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
