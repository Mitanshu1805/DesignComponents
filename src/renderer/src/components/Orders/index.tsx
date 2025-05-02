import React, { useState, useEffect } from 'react'
import './style.css'
import Edit from './Assets/basil_edit-outline.png'
import Delete from './Assets/fluent_delete-48-regular.png'
import Printer from './Assets/Frame 1321315357.png'
import DownArrow from './Assets/icon-park-outline_down.png'
import DownArrow2 from './Assets/icon-park-outline_down (1).png'

type OrderItem = {
  id: number | string
  name: string
  price: string
}

type OrdersProps = {
  orderItems: OrderItem[]
}

const Orders = ({ orderItems }: OrdersProps) => {
  const safeOrderItems = orderItems || []
  const [quantities, setQuantities] = useState<Record<string, number>>({})
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
    const initialQuantities: Record<string, number> = {}
    safeOrderItems.forEach((item) => {
      const idKey = item.id.toString()
      initialQuantities[idKey] = quantities[idKey] ?? 1
    })
    setQuantities(initialQuantities)
  }, [safeOrderItems])

  const handleQuantityChange = (itemId: string | number, operation: 'increment' | 'decrement') => {
    const idKey = itemId.toString()
    setQuantities((prevState) => {
      const currentQuantity = prevState[idKey] ?? 1
      const newQuantity =
        operation === 'increment'
          ? currentQuantity + 1
          : currentQuantity > 1
            ? currentQuantity - 1
            : 1
      return { ...prevState, [idKey]: newQuantity }
    })
  }

  const handleEditPrice = () => {
    console.log('edit price btn clicked')
  }

  const handleDeleteItem = () => {
    console.log('delete item btn clicked')
  }

  return (
    <div className="tableContainer">
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

      <div className="ordersContainer">
        <div className="orderContent">
          Orders #34562
          <div className="orderTypes">
            <button
              className={`dineIn ${selectedOrderTypes.includes('dineIn') ? 'active' : ''}`}
              onClick={() => handleOrderTypeClick('dineIn')}
            >
              <div className="dineInValue">Dine In</div>
            </button>
            <button
              className={`pickUp ${selectedOrderTypes.includes('pickUp') ? 'active' : ''}`}
              onClick={() => handleOrderTypeClick('pickUp')}
            >
              <div className="pickUpValue">Pick Up</div>
            </button>
            <button
              className={`delivery ${selectedOrderTypes.includes('delivery') ? 'active' : ''}`}
              onClick={() => handleOrderTypeClick('delivery')}
            >
              <div className="deliveryValue">Delivery</div>
            </button>
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
              {safeOrderItems.map((order, index) => {
                const idKey = order.id.toString()
                const quantity = quantities[idKey] ?? 1
                return (
                  <div
                    key={order.id}
                    className="item"
                    style={{ backgroundColor: index % 2 === 0 ? '#F2F2F2' : 'transparent' }}
                  >
                    <div className="itemName">
                      <div>{order.name}</div>
                      <div>
                        Price: {order.price} <img src={Edit} alt="edit" onClick={handleEditPrice} />
                      </div>
                    </div>

                    <div className="itemQuantity">
                      <div
                        className="minus"
                        onClick={() => handleQuantityChange(order.id, 'decrement')}
                      >
                        -
                      </div>
                      <div className="valueBox">
                        <div className="quantityValue">{quantity}</div>
                      </div>
                      <div
                        className="plus"
                        onClick={() => handleQuantityChange(order.id, 'increment')}
                      >
                        +
                      </div>
                    </div>

                    <div className="totalPrice">
                      <div className="totalPriceValue">{quantity * parseInt(order.price)} RS</div>
                      <div className="deleteItem">
                        <img src={Delete} alt="delete" onClick={handleDeleteItem} />
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

// import Sidebar from '../Sidebar'
// import Title from '../Title'
// import Orders from '../Orders'
// import BillDetails from '../BillDetails'
// import CategoryList from '../CategoryList'
// import ItemList from '../ItemList'
// import ParentComponent from '../CategoryItemSection/ParentComponent'

// function Layout(): React.JSX.Element {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         height: '100vh',
//         overflow: 'hidden',
//         border: '1px solid red',
//         backgroundColor: '#fffdf7'
//       }}
//     >
//       <Sidebar />

//       {/* Main content container with horizontal scroll fallback */}
//       <div
//         style={{
//           display: 'flex',
//           flex: 1,
//           overflowX: 'auto',
//           height: '100%'
//         }}
//       >
//         {/* Left: Title + Category + Items */}
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             flex: '1 1 0%',
//             height: '100%',
//             minWidth: '0' // Important to allow flex shrinking
//           }}
//         >
//           <div style={{ height: '70px', flexShrink: 0, minWidth: 0, overflow: 'hidden' }}>
//             <Title />
//           </div>

//           <div
//             style={{
//               display: 'flex',
//               flex: 1,
//               overflow: 'hidden',
//               // gap: '16px',
//               padding: '16px',
//               minWidth: 0 // prevents overflow due to flex children
//             }}
//           >
//             {/* Category List */}
//             <div
//               style={{
//                 display: 'flex',
//                 flex: 1,
//                 overflow: 'hidden',
//                 minWidth: 0
//               }}
//             >
//               <ParentComponent />
//             </div>
//           </div>
//         </div>

//         {/* Right: Orders + BillDetails */}
//         <div
//           style={{
//             flex: '0 0 36%',
//             // minWidth: '280px',
//             minWidth: '200px',
//             // maxWidth: '650px',
//             display: 'flex',
//             flexDirection: 'column',
//             padding: '12px',
//             borderLeft: '1px solid #ddd',
//             overflow: 'hidden'
//           }}
//         >
//           <div
//             style={{
//               flex: 1,
//               overflowY: 'hidden',
//               // borderBottom: '1px solid #ddd',
//               // paddingBottom: '12px',
//               // paddingRight: '16px',
//               boxSizing: 'border-box',
//               minHeight: 0 // ensure proper vertical overflow
//             }}
//           >
//             <Orders />
//           </div>

//           <div
//             style={{
//               flexShrink: 0,
//               paddingTop: '16px'
//             }}
//           >
//             <BillDetails />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Layout
