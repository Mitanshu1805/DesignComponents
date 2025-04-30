import Sidebar from '../Sidebar'
import Title from '../Title'
import Orders from '../Orders'
import BillDetails from '../BillDetails'
import CategoryList from '../CategoryList'
import ItemList from '../ItemList'

function Layout(): React.JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        border: '1px solid red',
        backgroundColor: '#fffdf7'
      }}
    >
      <Sidebar />

      {/* Main content container with horizontal scroll fallback */}
      <div
        style={{
          display: 'flex',
          flex: 1,
          overflowX: 'auto',
          height: '100%'
        }}
      >
        {/* Left: Title + Category + Items */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 0%',
            height: '100%',
            minWidth: '0' // Important to allow flex shrinking
          }}
        >
          <div style={{ height: '70px', flexShrink: 0, minWidth: 0, overflow: 'hidden' }}>
            <Title />
          </div>

          <div
            style={{
              display: 'flex',
              flex: 1,
              overflow: 'hidden',
              // gap: '16px',
              padding: '16px',
              minWidth: 0 // prevents overflow due to flex children
            }}
          >
            {/* Category List */}
            <div
              style={{
                borderRadius: '10px',
                height: '100%',
                overflowY: 'auto',
                flexShrink: 0,
                // width: '145px',
                minWidth: '120px'
              }}
            >
              <CategoryList />
            </div>

            {/* Item List */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                minWidth: 0
              }}
            >
              <ItemList />
            </div>
          </div>
        </div>

        {/* Right: Orders + BillDetails */}
        <div
          style={{
            flex: '0 0 36%',
            // minWidth: '280px',
            minWidth: '200px',
            // maxWidth: '650px',
            display: 'flex',
            flexDirection: 'column',
            padding: '12px',
            borderLeft: '1px solid #ddd',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              flex: 1,
              overflowY: 'hidden',
              // borderBottom: '1px solid #ddd',
              // paddingBottom: '12px',
              // paddingRight: '16px',
              boxSizing: 'border-box',
              minHeight: 0 // ensure proper vertical overflow
            }}
          >
            <Orders />
          </div>

          <div
            style={{
              flexShrink: 0,
              paddingTop: '16px'
            }}
          >
            <BillDetails />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
