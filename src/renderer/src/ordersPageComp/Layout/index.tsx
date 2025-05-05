import React from 'react'
import Sidebar from '../Sidebar'
import TopLeftOrder from '../TopLeftOrder'
import Header from '../Header'
import OrderDetails from '../OrderDetailsBox'
import './layout.css'

function Layout(): React.JSX.Element {
  return (
    <div className="layoutContainer">
      <Sidebar />
      <div className="mainContent">
        <TopLeftOrder />
        <Header />

        <div className="ordersGrid">
          <OrderDetails />
          <OrderDetails />
          <OrderDetails />
          <OrderDetails />
          <OrderDetails />
          <OrderDetails />
          <OrderDetails />
          <OrderDetails />
        </div>
      </div>
    </div>
  )
}

export default Layout
