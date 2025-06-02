import React from 'react'
import Sidebar from '../Sidebar'
import './layout.css'

function Layout(): React.JSX.Element {
  return (
    <div className="layoutContainer">
      <Sidebar />
    </div>
  )
}
export default Layout
