import { AppColors } from '@renderer/utils/Colors'
import React from 'react'

interface Props {
  outletList: any[]
  isLoading: boolean
  onOutletPress: (item: any) => void
}

export default function OutletComponent({ outletList, isLoading, onOutletPress }: Props) {
  return (
    <div style={styles.container}>
      {isLoading && <div style={styles.loader}>Loading...</div>}

      <div style={styles.list}>
        {outletList.map((item: any) => (
          <div key={item.outlet_id} onClick={() => onOutletPress(item)} style={styles.item}>
            <h3 style={styles.itemTitle}>{item.outlet_name || 'Unnamed Outlet'}</h3>
            <p style={styles.itemSubtitle}>{item.outlet_address || 'No location provided'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '20px',
    backgroundColor: AppColors.backgroundColor,
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif'
  },
  loader: {
    textAlign: 'center',
    fontSize: '18px',
    color: AppColors.primaryColor,
    marginBottom: '16px'
  },
  refreshSection: {
    textAlign: 'right',
    marginBottom: '12px'
  },
  refreshButton: {
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: AppColors.primaryColor,
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    disabled: {
      opacity: 0.6,
      cursor: 'not-allowed'
    }
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  item: {
    backgroundColor: AppColors.primaryColor,
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.2s'
  },
  itemTitle: {
    margin: 0,
    fontSize: '18px',
    fontWeight: 600,
    color: AppColors.white
  },
  itemSubtitle: {
    marginTop: '4px',
    fontSize: '14px',
    color: AppColors.white
  }
}
