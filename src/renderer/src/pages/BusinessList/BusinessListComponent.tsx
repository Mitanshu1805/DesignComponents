import { AppColors } from '@renderer/utils/Colors'
import React from 'react'

interface Props {
  isLoading: boolean
  businessList: any[]
  onBusinessSelection: (item: any) => void
}

export default function BusinessListComponent({
  isLoading,
  businessList,
  onBusinessSelection
}: Props) {
  return (
    <div style={styles.container}>
      {isLoading && <div style={styles.loader}>Loading...</div>}

      <div style={styles.list}>
        {businessList.map((item) => (
          <div key={item.business_id} onClick={() => onBusinessSelection(item)} style={styles.item}>
            <h3 style={styles.itemTitle}>{item.business_name || 'Unnamed Business'}</h3>
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
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif'
  },
  loader: {
    textAlign: 'center',
    padding: '20px',
    fontSize: '18px',
    fontWeight: '500',
    color: '#555'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  item: {
    padding: '16px',
    backgroundColor: AppColors.white,
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'transform 0.2s'
  },
  itemTitle: {
    fontSize: '18px',
    margin: '0 0 4px 0',
    fontWeight: 600
  }
}
