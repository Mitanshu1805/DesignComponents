import React, { useState } from 'react'
import TickIcon from './Assets/Group 1000010348.png'
import EditBtn from './Assets/Group 1000010360.png'
import DeleteBtn from './Assets/Group 1000010359.png'
import DownArrow from './Assets/chevron-down.png'
import './style.css'

const OrderDetails = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [status, setStatus] = useState('Ready to serve')

  const statusOptions = [
    'Ready to serve',
    'In Progress',
    'Ready for pick-up',
    'Preparing your meal'
  ]

  const badgeLabelMap = {
    'Preparing your meal': 'In Progress',
    'Ready to serve': 'Ready',
    'Ready for pick-up': 'Completed',
    'In Progress': 'Preparing'
  }

  return (
    <div className="orderDetailsContainer">
      <div className="orderDetailsBox">
        <div className="headerContainerOrder">
          <div className="headerBox">
            <div className="upperInfo">
              <div className="numberAndNameBox">
                <div className="numberBtn">
                  <div className="numberValue">T-1</div>
                </div>
                <div className="nameAndOrder">
                  <div className="nameValue">Watson Joyce</div>
                  <div className="orderValue">Order # 990</div>
                </div>
              </div>
              <div className="readyOrNotInfo">
                <span className="readyBadge">
                  <img src={TickIcon} alt={badgeLabelMap[status]} className="tickIcon" />
                  {badgeLabelMap[status]}
                </span>

                <div className="readyDropdown">
                  <div className="readyValue" onClick={() => setShowDropdown(!showDropdown)}>
                    • {status}
                    <img src={DownArrow} alt="DownArrow" className="downArrowIcon" />
                  </div>
                  {showDropdown && (
                    <div className="dropdownMenu">
                      {statusOptions.map((opt) => (
                        <div
                          key={opt}
                          className="dropdownItem"
                          onClick={() => {
                            setStatus(opt)
                            setShowDropdown(false)
                          }}
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="dateAndTimeBox">
              <div className="dayAndDateValue">Wednesday, 28, 2024</div>
              <div className="timeValue">4:48 PM</div>
            </div>
          </div>
        </div>
        <div className="itemsAndDetailsContainer">
          <div className="detailsHeader">
            <div className="qtyAndItems">
              <div className="qtyHead">QTY</div>
              <div className="itemsHead">Items</div>
            </div>
            <div className="priceHead">Price</div>
          </div>

          <div className="detailsRow">
            <div className="qtyAndItemsValues">
              <div className="qtyValue">01</div>
              <div className="itemsValue">Scrambled eggs with toast</div>
            </div>
            <div className="priceValue">$199</div>
          </div>
          <div className="detailsRow">
            <div className="qtyAndItemsValues">
              <div className="qtyValue">01</div>
              <div className="itemsValue">Smoked Salmon Bagel</div>
            </div>
            <div className="priceValue">$120</div>
          </div>
          <div className="detailsRow">
            <div className="qtyAndItemsValues">
              <div className="qtyValue">02</div>
              <div className="itemsValue">Belgian Waffle</div>
            </div>
            <div className="priceValue">$220</div>
          </div>
          <div className="detailsRow">
            <div className="qtyAndItemsValues">
              <div className="qtyValue">01</div>
              <div className="itemsValue">Classic Lemonade</div>
            </div>
            <div className="priceValue">$110</div>
          </div>
        </div>

        <div className="subTotalContainer">
          <div className="subTotalHead">Sub Total</div>
          <div className="subTotalValue">$649</div>
        </div>

        <div className="footerBtnContainer">
          <button className="iconBtn">
            <img src={EditBtn} alt="Edit" />
          </button>
          <button className="iconBtn">
            <img src={DeleteBtn} alt="Delete" />
          </button>
          <button className="generateBillBtn">Generate Bill</button>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
