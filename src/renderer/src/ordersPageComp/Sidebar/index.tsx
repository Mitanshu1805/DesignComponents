// import React from 'react'
import './style.css'
import Top from './Assets/Top.png'
import Nav1 from './Assets/Nav item 1.png'
import Nav2 from './Assets/Nav item 2.png'
import Nav3 from './Assets/Nav item 3.png'
import Nav4 from './Assets/Nav item 4.png'
import Nav5 from './Assets/Nav item 5.png'
import Nav6 from './Assets/Nav item 6.png'
import Nav7 from './Assets/Nav item 7.png'
import Nav8 from './Assets/Nav item 8.png'
import Inner from './Assets/Inner.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="topLogo">
        <img src={Top} />
      </div>
      <div className="contentIcons">
        <div className="topIcons">
          <button className="icon">
            <img src={Nav1} />
          </button>
          <button className="icon">
            <img src={Nav2} />
          </button>
          <button className="icon">
            <img src={Nav3} />
          </button>
          <button className="icon">
            <img src={Nav4} />
          </button>
          <button className="icon">
            <img src={Nav5} />
          </button>
        </div>
        <div className="bottomIcons">
          <button className="icon">
            <img src={Nav6} />
          </button>
          <button className="icon">
            <img src={Nav7} />
          </button>
          <button className="icon">
            <img src={Nav8} />
          </button>
        </div>
      </div>

      <div className="footerIcon">
        <img src={Inner} />
      </div>
    </div>
  )
}

export default Sidebar
