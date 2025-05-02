import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Title from '../Title'
import Orders from '../Orders'
import BillDetails from '../BillDetails'
import CategoryList from '../CategoryList'
import ItemList from '../ItemList'
import ParentComponent from '../CategoryItemSection/ParentComponent'

type Item = {
  id: number
  name: string
  price: string
  categoryId: number
}
const allItems = [
  { id: 1, name: 'Dabeli Special', price: '15', categoryId: 1 },
  { id: 2, name: 'Dabeli Cheese', price: '15', categoryId: 1 },
  { id: 3, name: 'Dabeli Cheese', price: '15', categoryId: 1 },
  { id: 4, name: 'Dabeli Cheese', price: '15', categoryId: 1 },
  { id: 5, name: 'Dabeli Cheese', price: '15', categoryId: 1 },
  { id: 6, name: 'Dabeli Cheese', price: '15', categoryId: 1 },
  { id: 7, name: 'Dabeli Cheese', price: '15', categoryId: 1 },
  { id: 8, name: 'Vadapav Classic', price: '15', categoryId: 2 },
  { id: 9, name: 'Vadapav Classic', price: '15', categoryId: 2 },
  { id: 10, name: 'Vadapav Classic', price: '15', categoryId: 2 },
  { id: 11, name: 'Vadapav Classic', price: '15', categoryId: 2 }

  // Add more items if you want
]

function Layout(): React.JSX.Element {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1)

  const filteredItems = allItems.filter((item) => item.categoryId === selectedCategoryId)

  const [orderItems, setOrderItems] = useState<Item[]>([])

  const handleItemClick = (item) => {
    setOrderItems((prevOrder) => [...prevOrder, item]) // add item to order list
    console.log('order items:>>', orderItems)
  }
  // const [orderItems, setOrderItems] = useState<Item[]>([])
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        border: '1px solid red',
        backgroundColor: '#fffdf7'
      }}
    >
      <Sidebar />

      {/* Main content container with horizontal scroll fallback */}
      <div
        style={{
          display: 'flex',
          flex: 1,
          overflowX: 'auto',
          height: '100%'
        }}
      >
        {/* Left: Title + Category + Items */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 0%',
            height: '100%',
            minWidth: '0' // Important to allow flex shrinking
          }}
        >
          <div style={{ height: '70px', flexShrink: 0, minWidth: 0, overflow: 'hidden' }}>
            <Title />
          </div>

          <div
            style={{
              display: 'flex',
              flex: 1,
              overflow: 'hidden',
              // gap: '16px',
              padding: '16px',
              minWidth: 0 // prevents overflow due to flex children
            }}
          >
            {/* Category List */}
            <div style={{ display: 'flex', flex: 1, overflow: 'hidden', minWidth: 0 }}>
              <div
                style={{
                  borderRadius: '10px',
                  height: '100%',
                  overflowY: 'auto',
                  flexShrink: 0,
                  minWidth: '120px'
                }}
              >
                <CategoryList
                  selectedCategoryId={selectedCategoryId}
                  setSelectedCategoryId={setSelectedCategoryId}
                />
              </div>

              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  minWidth: 0
                }}
              >
                <ItemList items={filteredItems} onItemClick={handleItemClick} />
              </div>
              {/* <Orders orderItems={orderItems || []} /> */}
            </div>
          </div>
        </div>

        {/* Right: Orders + BillDetails */}
        <div
          style={{
            flex: '0 0 36%',
            // minWidth: '280px',
            minWidth: '200px',
            // maxWidth: '650px',
            display: 'flex',
            flexDirection: 'column',
            padding: '12px',
            borderLeft: '1px solid #ddd',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              flex: 1,
              overflowY: 'hidden',
              // borderBottom: '1px solid #ddd',
              // paddingBottom: '12px',
              // paddingRight: '16px',
              boxSizing: 'border-box',
              minHeight: 0 // ensure proper vertical overflow
            }}
          >
            <Orders orderItems={orderItems || []} />
          </div>

          <div
            style={{
              flexShrink: 0,
              paddingTop: '16px'
            }}
          >
            <BillDetails />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
