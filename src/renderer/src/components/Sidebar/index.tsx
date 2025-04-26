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
        {/* <div className="logo"></div> */}
      </div>
      <div className="contentIcons">
        <div className="topIcons">
          <div className="icon">
            <img src={Nav1} />
            {/* <div className="iconImage"></div> */}
          </div>
          <div className="icon">
            <img src={Nav2} />
            {/* <div className="iconImage"></div> */}
          </div>
          <div className="icon">
            <img src={Nav3} />
            {/* <div className="iconImage"></div> */}
          </div>
          <div className="icon">
            <img src={Nav4} />
            {/* <div className="iconImage"></div> */}
          </div>
          <div className="icon">
            <img src={Nav5} />
            {/* <div className="iconImage"></div> */}
          </div>
        </div>
        <div className="bottomIcons">
          <div className="icon">
            <img src={Nav6} />
            {/* <div className="iconImage"></div> */}
          </div>
          <div className="icon">
            <img src={Nav7} />
            {/* <div className="iconImage"></div> */}
          </div>
          <div className="icon">
            <img src={Nav8} />
            {/* <div className="iconImage"></div> */}
          </div>
        </div>
      </div>

      <div className="footerIcon">
        <img src={Inner} />
        {/* <div className="footerIconImage"></div> */}
      </div>
    </div>
  )
}

export default Sidebar
