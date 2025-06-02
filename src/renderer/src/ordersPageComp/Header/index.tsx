import React from 'react'
import SearchIcon from './Assets/Left Icon (1).png'
import './style.css'

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="leftSideBtns">
        <div className="allBtnBox">
          <button className="allBtn">All</button>
        </div>

        <button className="inProcessBtn">In Process</button>
        <button className="completedBtn">Completed</button>
        <button className="cancelledBtn">Cancelled</button>
      </div>
      <div className="rightSideContainer">
        <button className="addNewOrderBtn">
          <div className="addNewOrderValue">Add New Order</div>
        </button>
        <div className="searchBarContainer">
          <div className="searchBarBox">
            <img src={SearchIcon} alt="Search" />
            <input type="text" className="searchBarInput" placeholder="Search for food name" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
