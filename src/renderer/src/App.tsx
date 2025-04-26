// import Versions from './components/Versions'
// import electronLogo from './assets/electron.svg'
import Sidebar from './components/Sidebar'
import Title from './components/Title'
import Orders from './components/Orders'
import BillDetails from './components/BillDetails'
import CategoryList from './components/CategoryList'
import ItemList from './components/ItemList'

function App(): React.JSX.Element {
  return (
    // <Orders />
    <BillDetails />
    // <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', border: '1px solid red' }}>
    //   <Sidebar />

    //   <div style={{ display: 'flex', flex: 1, overflow: 'hidden', height: '100%' }}>
    //     {/* Left: Title + Category + Items */}
    //     <div style={{ display: 'flex', flexDirection: 'column', flex: 1.4, height: '100%' }}>
    //       <div style={{ height: '60px', flexShrink: 0 }}>
    //         <Title />
    //       </div>

    //       <div
    //         style={{
    //           display: 'flex',
    //           flex: 1,
    //           overflow: 'hidden',
    //           gap: '16px',
    //           padding: '16px'
    //         }}
    //       >
    //         <div
    //           style={{
    //             width: '145px',
    //             minWidth: '140px',
    //             background: '#f1f1f1',
    //             borderRadius: '10px',
    //             // padding: '8px',
    //             overflowY: 'auto',
    //             flexShrink: 0,
    //             height: '100%'
    //           }}
    //         >
    //           <div>
    //             <CategoryList />
    //           </div>
    //         </div>

    //         <div
    //           style={{
    //             flex: 1,
    //             display: 'flex',
    //             flexDirection: 'column',
    //             overflow: 'hidden'
    //           }}
    //         >
    //           <div style={{ overflowY: 'auto', flex: 1 }}>
    //             <ItemList />
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Right: Orders + BillDetails */}
    //     <div
    //       style={{
    //         flex: 0.8,
    //         display: 'flex',
    //         flexDirection: 'column',
    //         background: 'cornsilk',
    //         padding: '12px',
    //         borderLeft: '1px solid #ddd',
    //         overflow: 'hidden'
    //       }}
    //     >
    //       <div style={{ flex: 1, overflowY: 'auto' }}>
    //         <Orders />
    //       </div>

    //       <div style={{ flexShrink: 0 }}>
    //         <BillDetails />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default App
