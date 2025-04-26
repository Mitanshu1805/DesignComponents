// import React from "react";
import './style.css'
import Edit from './Assets/basil_edit-outline.png'
import Delete from './Assets/fluent_delete-48-regular.png'
import Printer from './Assets/Frame 1321315357.png'
import DownArrow from './Assets/icon-park-outline_down.png'
import DownArrow2 from './Assets/icon-park-outline_down (1).png'
const Orders = () => {
  return (
    <div className="totalContainer">
      <div className="tableNo">
        <div className="tableNumber">Table No: 1</div>
        <div className="downArrow">
          <img src={DownArrow2} />
        </div>
      </div>
      <div className="ordersContainer">
        <div className="orderContent">
          Orders #34562
          <div className="orderTypes">
            <div className="dineIn">
              <div className="dineInValue">Dine In</div>
            </div>
            <div className="pickUp">
              <div className="pickUpValue">Pick Up</div>
            </div>
            <div className="delivery">
              <div className="deliveryValue">Delivery</div>
            </div>
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
              <div className="item">
                <div className="itemName">
                  CHESSE DABELI Price: 45
                  <div>
                    <img src={Edit} />
                  </div>
                </div>

                <div className="itemQuantity">
                  <div className="minus">-</div>
                  <div className="valueBox">
                    <div className="value">2</div>
                  </div>
                  <div className="plus">+</div>
                </div>
                <div className="totalPrice">
                  <div className="totalPriceValue">200.00 RS</div>
                  <div className="deleteItem">
                    <img src={Delete} />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="itemName">
                  CHESSE DABELI Price: 45{' '}
                  <div>
                    <img src={Edit} />
                  </div>
                </div>
                <div className="itemQuantity">
                  <div className="minus">-</div>
                  <div className="valueBox">
                    <div className="value">2</div>
                  </div>
                  <div className="plus">+</div>
                </div>
                <div className="totalPrice">
                  <div className="totalPriceValue">200.00 RS</div>
                  <div className="deleteItem">
                    <img src={Delete} />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="itemName">
                  CHESSE DABELI Price: 45{' '}
                  <div>
                    <img src={Edit} />
                  </div>
                </div>

                <div className="itemQuantity">
                  <div className="minus">-</div>
                  <div className="valueBox">
                    <div className="value">2</div>
                  </div>
                  <div className="plus">+</div>
                </div>
                <div className="totalPrice">
                  <div className="totalPriceValue">200.00 RS</div>
                  <div className="deleteItem">
                    <img src={Delete} />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="itemName">
                  CHESSE DABELI Price: 45{' '}
                  <div>
                    <img src={Edit} />
                  </div>
                </div>
                <div className="itemQuantity">
                  <div className="minus">-</div>
                  <div className="valueBox">
                    <div className="value">2</div>
                  </div>
                  <div className="plus">+</div>
                </div>
                <div className="totalPrice">
                  <div className="totalPriceValue">200.00 RS</div>
                  <div className="deleteItem">
                    <img src={Delete} />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="timeDate">
            <div className="timeDateContent">
              <div className="timeDateBox">
                <div className="timeDateValue">KOT 1 | Time- 15:54 | Date- 20/3/2025</div>
              </div>
              <div>
                <img src={DownArrow} />
              </div>
            </div>
            <div className="printer">
              <img src={Printer} />
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
