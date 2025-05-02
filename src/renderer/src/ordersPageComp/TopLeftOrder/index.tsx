import React from 'react'
import LeftSideIcon from './Assets/Group 1000010088.png'
import './style.css'

const TopLeftOrder = () => {
  return (
    <div className="orderBox">
      <div className="leftSideIcon">
        <img src={LeftSideIcon} />
      </div>
      <div className="orderValue">Orders</div>
    </div>
  )
}

export default TopLeftOrder
