// import React from "react";
import './style.css'
import OilDabeli from './Assets/Ellipse 5.png'
import ClearBtn from './Assets/Frame 1321315148.png'

const ItemList = ({ items, onItemClick }) => {
  return (
    <div className="layout">
      <div className="mainContent">
        <div className="contentWrapper">
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '20px', fontSize: '18px', color: '#888' }}>
              No items found
            </div>
          ) : (
            <div className="menuItemGrid">
              {items.map((item, index) => (
                <div className="menuItemCard" key={index}>
                  <div className="menuItemImage" onClick={() => onItemClick(item)}>
                    <img src={item.image || OilDabeli} alt={item.name} />
                  </div>
                  <div className="menuItemDetails">
                    <div className="menuItemName">{item.name}</div>
                    <div className="menuItemPrice">Price: ₹{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="clearButtonWrapper">
            <img src={ClearBtn} alt="Clear" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemList

// // import React from "react";
// import './style.css'
// import OilDabeli from './Assets/Ellipse 5.png'
// import ClearBtn from './Assets/Frame 1321315148.png'

// const items = Array(15).fill({
//   name: 'Oil Dabeli',
//   price: 15,
//   image: OilDabeli
// })

// const ItemList = () => {
//   return (
//     <div className="layout">
//       <div className="mainContent">
//         <div className="contentWrapper">
//           <div className="menuItemGrid">
//             {items.map((item, index) => (
//               <div className="menuItemCard" key={index}>
//                 <div className="menuItemImage">
//                   <img src={item.image} alt={item.name} />
//                 </div>
//                 <div className="menuItemDetails">
//                   <div className="menuItemName">{item.name}</div>
//                   <div className="menuItemPrice">Price: ₹{item.price}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="clearButtonWrapper">
//             <img src={ClearBtn} />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ItemList
