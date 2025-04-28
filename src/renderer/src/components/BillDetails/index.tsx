// import React from 'react'
import './style.css'
import CalenderIcon from './Assets/food-bag-svgrepo-com 1.png'
const BillDetails = () => {
  return (
    // <div className="billDetails">
    //   Bill Details
    //   <div className="contentBox">
    //     <div className="content">
    //       <div className="detailsBox">
    //         <div className="details">
    //           <div className="itemTotal">
    //             <div className="itemTotalBox">
    //               <img src={CalenderIcon} alt="icon" />
    //               <div className="itemTotalValue">Item Total</div>
    //             </div>
    //             <div className="price">$20</div>
    //           </div>
    //           <div className="itemTotal">
    //             <div className="itemTotalBox">
    //               <img src={CalenderIcon} alt="icon" />
    //               <div className="itemTotalValue">GST And Restaurant Charge</div>
    //             </div>
    //             <div className="price">$20</div>
    //           </div>
    //           <div className="itemTotal">
    //             <div className="itemTotalBox">
    //               <img src={CalenderIcon} alt="icon" />
    //               <div className="itemTotalValue">Delivery Charge</div>
    //             </div>
    //             <div className="price">$20</div>
    //           </div>
    //           <div className="itemTotal grandTotalRow">
    //             <div className="itemTotalBox">
    //               <div className="itemTotalValue">Grand Total</div>
    //             </div>
    //             <div className="price">$200</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="sentToKOIBox">
    //     <div className="sentToKOI">Sent To KOI</div>
    //   </div>
    // </div>
    <div className="billDetailsContainer">
      <div className="billDetailsTitle">Bill Details</div>

      <div className="grandTotalContainer">
        <div className="grandTotalBox">
          <div className="grandTotalText">Grand Total</div>
          <div className="grandTotalPrice">$200</div>
        </div>
      </div>

      <div className="buttonGroup">
        <button className="billButton">KOT</button>
        <button className="billButton">KOT & Print</button>
        <button className="billButton">Save</button>
        <button className="billButton">Save & Print</button>
      </div>
    </div>
  )
}

export default BillDetails
