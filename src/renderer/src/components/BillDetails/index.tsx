import './style.css'

type OrderItem = {
  item_id: number | string
  item_name: string
  price?: number
  quantity: number
}

type Props = {
  orderItems: OrderItem[]
  createOrder: (orderData: {
    items: { item_id: string | number; quantity: number }[]
    type: string
  }) => void
}

const BillDetails = ({ orderItems, createOrder }: Props) => {
  const calculateTotal = () => {
    return orderItems.reduce((total, item) => {
      const price = parseFloat(item.price as any) || 0
      const quantity = item.quantity || 0
      return total + price * quantity
    }, 0)
  }

  const grandTotal = calculateTotal()

  const buildOrderData = (type: string) => {
    const items = orderItems.map((item) => ({
      item_id: item.item_id,
      quantity: item.quantity || 1
    }))

    return {
      type,
      items
    }
  }

  return (
    <div className="billDetailsContainer">
      <div className="billDetailsTitle">Bill Details</div>

      <div className="grandTotalContainer">
        <div className="grandTotalBox">
          <div className="grandTotalText">Grand Total</div>
          <div className="grandTotalPrice">₹{grandTotal.toFixed(2)}</div>
        </div>
      </div>

      <div className="buttonGroup">
        <button className="billButton" onClick={() => createOrder(buildOrderData('KOT'))}>
          KOT
        </button>
        <button className="billButton" onClick={() => createOrder(buildOrderData('KOT_PRINT'))}>
          KOT & Print
        </button>
        <button className="billButton" onClick={() => createOrder(buildOrderData('SAVE'))}>
          Save
        </button>
        <button className="billButton" onClick={() => createOrder(buildOrderData('SAVE_PRINT'))}>
          Save & Print
        </button>
      </div>
    </div>
  )
}

export default BillDetails
