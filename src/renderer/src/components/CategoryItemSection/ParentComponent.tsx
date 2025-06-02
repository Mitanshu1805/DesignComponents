import React, { useState } from 'react'
import CategoryList from './categoryList'
import ItemList from './itemList'
import Orders from '../Orders'

type Item = {
  id: number
  name: string
  price: string
  categoryId: number
}

const allItems = [
  { id: 1, name: 'Dabeli Special', price: '15', categoryId: 1 },
  { id: 2, name: 'Dabeli Cheese', price: '15', categoryId: 1 },
  { id: 2, name: 'Dabeli Cheese', price: '15', categoryId: 1 },
  { id: 2, name: 'Dabeli Cheese', price: '15', categoryId: 1 },
  { id: 2, name: 'Dabeli Cheese', price: '15', categoryId: 1 },
  { id: 2, name: 'Dabeli Cheese', price: '15', categoryId: 1 },
  { id: 2, name: 'Dabeli Cheese', price: '15', categoryId: 1 },
  { id: 3, name: 'Vadapav Classic', price: '15', categoryId: 2 },
  { id: 3, name: 'Vadapav Classic', price: '15', categoryId: 2 },
  { id: 3, name: 'Vadapav Classic', price: '15', categoryId: 2 },
  { id: 3, name: 'Vadapav Classic', price: '15', categoryId: 2 }

  // Add more items if you want
]

const ParentComponent = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1)

  const filteredItems = allItems.filter((item) => item.categoryId === selectedCategoryId)

  const [orderItems, setOrderItems] = useState<Item[]>([])

  const handleItemClick = (item) => {
    setOrderItems((prevOrder) => [...prevOrder, item])
  }

  return (
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
  )
}

export default ParentComponent
