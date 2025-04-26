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
      <div className="billDetailsValue">Bill Details </div>
      <div className="grandTotalContainer">
        <div className="grandTotalBox">
          <div className="grandTotalPocket">
            <div className="grandTotalValue">Grand Total</div>
          </div>
          <div className="grandTotalPrice">$200</div>
        </div>
      </div>
      <div className="kotPrintSave">
        <div className="kot">
          <div className="kotValue">KOT</div>
        </div>
        <div className="kotAndPrint">
          <div className="kotAndPrintValue">KOT & Print</div>
        </div>
        <div className="save">
          <div className="saveValue">Save</div>
        </div>
        <div className="saveAndPrint">
          <div className="saveAndPrintValue">Save & Print</div>
        </div>
      </div>
    </div>
  )
}

export default BillDetails
