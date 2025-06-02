import { HashRouter, Routes, Route } from 'react-router-dom'
import LoginController from './pages/Login/LoginController'
import OtpController from './pages/OTP/OtpController'
import BusinessListController from './pages/BusinessList/BusinessListController'
import OutletController from './pages/OutletList/OutletListController'
import AddTerminalController from './pages/AddTerminal/AddTerminalController'
import HomeController from './pages/Home/HomeController'
import OrderController from './pages/Orders/OrdersController'
import TableOrderController from './pages/TableOrders/TableOrdersController'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginController />} />
        <Route path="/otp" element={<OtpController />} />
        <Route path="/businessList" element={<BusinessListController />} />
        <Route path="/outletList" element={<OutletController />} />
        <Route path="/addTerminal" element={<AddTerminalController />} />
        <Route path="/home" element={<HomeController />} />
        <Route path="/ordersPage" element={<OrderController />} />
        <Route path="/tableOrders" element={<TableOrderController />} />
      </Routes>
    </HashRouter>
  )
}

// import { useState } from 'react'
// import { Cut, Line, Printer, render, Row, Text } from 'react-thermal-printer'

// declare global {
//   interface Window {
//     electronAPI: {
//       sendRawDataToPrinter: (
//         printerIP: string,
//         rawData: Uint8Array
//       ) => Promise<{ success: boolean; error?: string }>
//     }
//   }
// }

// function App() {
//   const [printerIP, setPrinterIP] = useState('192.168.23.6')

//   return (
//     <div style={{ padding: 50 }}>
//       <h1>🖨️ Print via React</h1>

//       <input
//         type="text"
//         value={printerIP}
//         onChange={(e) => setPrinterIP(e.target.value)}
//         placeholder="Enter Printer IP (e.g., 192.168.1.100)"
//         style={{ padding: '10px', fontSize: '16px', width: '300px', marginBottom: '20px' }}
//       />

//       <br />

//       <button
//         onClick={handlePrint}
//         style={{ padding: '15px 30px', fontSize: '20px', background: 'black', color: 'white' }}
//       >
//         Print Receipt
//       </button>
//     </div>
//   )
// }

// export default App
