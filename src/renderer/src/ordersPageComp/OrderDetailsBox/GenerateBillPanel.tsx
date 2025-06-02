// GenerateBillPanel.jsx
import React, { useState, useEffect } from 'react'
import './style.css'
import Edit from './Assets/basil_edit-outline.png'
import Delete from './Assets/fluent_delete-48-regular.png'
import Printer from './Assets/Frame 1321315357.png'
import DownArrow2 from './Assets/icon-park-outline_down (1).png'
import CalenderIcon from './Assets/food-bag-svgrepo-com 1.png'

const GenerateBillPanel = ({ onClose }) => {
  const [showTableDropdown, setShowTableDropdown] = useState(false)
  const [selectedOrderTypes, setSelectedOrderTypes] = useState<string[]>([])

  const handleOrderTypeClick = (type: string) => {
    setSelectedOrderTypes(
      (prevTypes) =>
        prevTypes.includes(type)
          ? prevTypes.filter((t) => t !== type) // remove if already selected
          : [...prevTypes, type] // add if not selected
    )
  }

  useEffect(() => {
    console.log('GenerateBillPanel mounted')
  }, [])

  return (
    <div className="generateBillPanelWrapper">
      <div className="tableContainer">
        {/* Table Dropdown */}
        <button className="tableNo" onClick={() => setShowTableDropdown((prev) => !prev)}>
          <div className="tableNumber">Table No: 1</div>
          <div className="downArrow">
            <img src={DownArrow2} alt="down arrow" />
          </div>
        </button>
        {showTableDropdown && (
          <div className="tableDropdown">
            <div className="tableOption">Table No: 2</div>
            <div className="tableOption">Table No: 3</div>
            <div className="tableOption">Table No: 4</div>
          </div>
        )}

        {/* Order Section */}
        <div className="ordersContainer">
          <div className="orderContent">
            Orders #34562
            {/* <div className="orderTypes">
              {['dineIn', 'pickUp', 'delivery'].map((type) => (
                <button
                  key={type}
                  className={`${type} ${selectedOrderTypes.includes(type) ? 'active' : ''}`}
                  onClick={() => handleOrderTypeClick(type)}
                >
                  <div className={`${type}Value`}>
                    {type === 'dineIn' ? 'Dine In' : type === 'pickUp' ? 'Pick Up' : 'Delivery'}
                  </div>
                </button>
              ))}
            </div> */}
            <div className="orders">
              <div className="header">
                <div className="headerContent">
                  <div className="headerName">Item Name</div>
                  <div className="headerQuantity">Quantity</div>
                  <div className="headerPrice">Total Price</div>
                </div>
              </div>

              <div className="orderValues">
                {/* {safeOrderItems.map((order, index) => {
                const idKey = order.id.toString()
                const quantity = quantities[idKey] ?? 1 */}

                <div
                  // key={order.id}
                  className="item"
                  // style={{ backgroundColor: index % 2 === 0 ? '#F2F2F2' : 'transparent' }}
                >
                  <div className="itemName">
                    {/* <div>{order.name}</div> */}
                    <div>
                      Price: <img src={Edit} alt="edit" />
                    </div>
                  </div>

                  <div className="itemQuantity">
                    <div
                      className="minus"
                      // onClick={() => handleQuantityChange(order.id, 'decrement')}
                    >
                      -
                    </div>
                    <div className="valueBox">
                      <div className="quantityValue"></div>
                    </div>
                    <div
                      className="plus"
                      // onClick={() => handleQuantityChange(order.id, 'increment')}
                    >
                      +
                    </div>
                  </div>

                  <div className="totalPrice">
                    <div className="totalPriceValue"> RS</div>
                    <div className="deleteItem">
                      <img src={Delete} alt="delete" />
                    </div>
                  </div>
                </div>
                {/* })} */}
              </div>
            </div>
          </div>
        </div>

        {/* Bill Details Section */}
        <div className="billDetailsContainer">
          <div className="billDetailsTitle">Bill Details</div>
          <div className="contentBox">
            <div className="content">
              <div className="detailsBox">
                <div className="details">
                  <div className="itemTotal">
                    <div className="itemTotalBox">
                      <img src={CalenderIcon} alt="icon" />
                      <div className="itemTotalValue">Item Total</div>
                    </div>
                    <div className="price">$20</div>
                  </div>
                  <div className="itemTotal">
                    <div className="itemTotalBox">
                      <img src={CalenderIcon} alt="icon" />
                      <div className="itemTotalValue">GST And Restaurant Charge</div>
                    </div>
                    <div className="price">$20</div>
                  </div>
                  <div className="itemTotal">
                    <div className="itemTotalBox">
                      <img src={CalenderIcon} alt="icon" />
                      <div className="itemTotalValue">Delivery Charge</div>
                    </div>
                    <div className="price">$20</div>
                  </div>
                  <div className="itemTotal grandTotalRow">
                    <div className="itemTotalBox">
                      <div className="itemTotalValue">Grand Total</div>
                    </div>
                    <div className="price">$200</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sentToKOIBox">
            <div className="sentToKOI">Sent To KOI</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenerateBillPanel
