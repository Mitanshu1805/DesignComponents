/* eslint-disable prettier/prettier */
import React, { useState, useMemo, useEffect } from 'react'
import BillDetails from '../BillDetails'
import CategoryList from '../CategoryList'
import ItemList from '../ItemList'
import Orders from '../Orders'
import Sidebar from '../Sidebar'
import Title from '../Title'
import { OrderAPIs } from '@renderer/networking/orderApis'
import moment from 'moment'
import { Cut, Line, Printer, render, Row, Text } from 'react-thermal-printer'

type LayoutProps = {
  menuData: any[]
}

function Layout({ menuData }: LayoutProps): React.JSX.Element {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | string | null>(null)
  const [orderItems, setOrderItems] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')

  const createOrder = async (orderData) => {
    const response = await OrderAPIs.createOrder(
      moment.utc().toISOString(),
      false,
      'CASH',
      orderData?.items
    )

    if (response) {
      setOrderItems([])
      handlePrint()
    }
  }

  useEffect(() => {
    if (menuData.length > 0 && !selectedCategoryId) {
      setSelectedCategoryId(menuData[0]?.category_id)
    }
  }, [menuData, selectedCategoryId])

  const filteredItems = useMemo(() => {
    const selectedCategory = menuData.find((cat) => cat.category_id === selectedCategoryId)
    if (!selectedCategory) return []

    const items = selectedCategory.items || []

    if (!searchQuery.trim()) return items

    return items.filter((item) =>
      item?.item_name?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [menuData, selectedCategoryId, searchQuery])

  const handleItemClick = (item: any) => {
    setOrderItems((prev) => {
      const existingItem = prev.find((i) => i.item_id === item.item_id)
      if (existingItem) {
        return prev.map((i) =>
          i.item_id === item.item_id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const handleRemoveItem = (itemId: string | number) => {
    setOrderItems((prev) => prev.filter((item) => item.item_id !== itemId))
  }

  const handleClearItems = () => {
    setOrderItems([])
  }

  const handlePrint = async () => {
    if (orderItems.length === 0) {
      alert('🛒 No items to print.')
      return
    }

    const total = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const receipt = (
      <Printer type="epson">
        {/* Header */}
        <Text align="center" bold size={{ width: 2, height: 2 }}>
          Awesome Cafe
        </Text>
        <Text align="center">-------------------------------</Text>
        <Text align="center">{moment().format('YYYY-MM-DD HH:mm:ss')}</Text>
        <Line />

        {/* Column Headers */}
        <Row left={'Item' + '                         Qty'} right="Amount(RS)" />
        <Line />

        {/* Order Items */}
        {orderItems.map((item) => {
          const name =
            item.item_name.length > 16 ? item.item_name.substring(0, 16) : item.item_name.padEnd(16)

          const qty = String(item.quantity).padStart(2)
          const amount = (item.price * item.quantity).toFixed(2)

          return (
            <Row
              key={item.item_id}
              left={name}
              center={'             ' + `${qty}`}
              right={amount}
            />
          )
        })}

        <Line />

        {/* Total and Footer */}
        <Row left="TOTAL" right={`${total.toFixed(2)}`} />
        <Text align="center">Thank you, visit again!</Text>
        <Cut />
      </Printer>
    )

    try {
      const rawData: Uint8Array = await render(receipt)

      const result = await window.electronAPI.sendRawDataToPrinter('192.168.23.6', rawData)

      if (result.success) {
        console.log('🖨️ Printed Successfully!')
      } else {
        alert('Print Failed: ' + result.error)
      }
    } catch (error) {
      console.error('Print Error:', error)
      alert('Print Error: ' + error.message)
    }
  }

  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'hidden', backgroundColor: '#fffdf7' }}
    >
      <Sidebar />

      <div style={{ display: 'flex', flex: 1, overflowX: 'auto', height: '100%' }}>
        {/* Left Panel: Title + Categories + Items */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 0%',
            height: '100%',
            minWidth: 0
          }}
        >
          <div style={{ height: '70px', flexShrink: 0 }}>
            <Title searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>

          <div
            style={{ display: 'flex', flex: 1, overflow: 'hidden', padding: '16px', minWidth: 0 }}
          >
            {/* Category + Item List */}
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
                  menuData={menuData}
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
                  minWidth: 0,
                  overflowY: 'auto'
                }}
              >
                <ItemList
                  items={filteredItems}
                  onItemClick={handleItemClick}
                  onClearItems={handleClearItems}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Orders + Bill */}
        <div
          style={{
            flex: '0 0 36%',
            minWidth: '200px',
            display: 'flex',
            flexDirection: 'column',
            padding: '12px',
            borderLeft: '1px solid #ddd',
            overflow: 'hidden'
          }}
        >
          <div style={{ flex: 1, overflowY: 'auto', boxSizing: 'border-box', minHeight: 0 }}>
            <Orders
              orderItems={orderItems}
              setOrderItems={setOrderItems}
              onRemoveItem={handleRemoveItem}
            />
          </div>

          <div style={{ flexShrink: 0, paddingTop: '16px' }}>
            <BillDetails orderItems={orderItems} createOrder={createOrder} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
