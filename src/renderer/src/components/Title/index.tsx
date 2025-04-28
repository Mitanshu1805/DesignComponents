// import React from "react";
import './style.css'
import SearchIcon from './Assets/Left Icon.png'

const Title = () => {
  return (
    <div>
      <div className="title">
        <div className="titleHeading">
          <div className="headingName">Jaegar Resto</div>
          <div className="titleDate">Tuesday, 2 Feb 2021</div>
        </div>
        <div className="searchbar">
          <div className="searchIcon">
            <img src={SearchIcon} alt="Search Icon" />
          </div>

          {/* <div className="searchSpace">Search for food name</div> */}
          <input type="text" placeholder="Search for food name" className="searchInput" />
        </div>
      </div>
    </div>
  )
}

export default Title
