import OilDabeli from './Assets/Ellipse 5.png'
import ClearBtn from './Assets/Frame 1321315148.png'
import './style.css'

interface itemListProps {
  items: any
  onItemClick: (value: any) => void
  onClearItems: () => void
}

const ItemList = ({ items, onItemClick, onClearItems }: itemListProps) => {
  return (
    <div className="layout">
      <div className="mainContent">
        <div className="contentWrapper">
          {items?.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '20px', fontSize: '18px', color: '#888' }}>
              No items found
            </div>
          ) : (
            <div className="menuItemGrid">
              {items.map((item, index) => (
                <div className="menuItemCard" key={index} onClick={() => onItemClick(item)}>
                  <div className="menuItemImage">
                    <img
                      src={item.logo_image || OilDabeli}
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = OilDabeli
                      }}
                    />
                  </div>
                  <div className="menuItemDetails">
                    <div className="menuItemName">{item.item_name}</div>
                    <div className="menuItemPrice">Price: ₹{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="clearButtonWrapper">
            <img src={ClearBtn} onClick={onClearItems} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemList
