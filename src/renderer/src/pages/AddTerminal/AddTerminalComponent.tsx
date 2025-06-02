import { AppColors } from '@renderer/utils/Colors'
import React from 'react'

interface ValidityItem {
  id: number
  name: string
  value: string
}

interface Props {
  isLoading: boolean
  validityList: ValidityItem[]
  selectedValue: string
  onCreateValidity: () => void
  setSelectedValue: (item: string) => void
}

export default function AddTerminalComponent({
  isLoading,
  validityList,
  selectedValue,
  onCreateValidity,
  setSelectedValue
}: Props) {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Select Login Validity</h2>

      <div style={styles.list}>
        {validityList.map((item) => (
          <label key={item.id} style={styles.itemList} onClick={() => setSelectedValue(item.value)}>
            <input
              type="radio"
              checked={selectedValue === item.value}
              onChange={() => setSelectedValue(item.value)}
              style={{ marginRight: '10px', accentColor: AppColors.primaryColor }}
            />
            {item.name}
          </label>
        ))}
      </div>

      {selectedValue && (
        <button
          onClick={onCreateValidity}
          disabled={isLoading}
          style={{
            marginTop: '30px',
            padding: '12px 20px',
            backgroundColor: AppColors.primaryColor,
            color: AppColors.white,
            border: 'none',
            borderRadius: '8px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.6 : 1
          }}
        >
          {isLoading ? 'Processing...' : 'Continue'}
        </button>
      )}
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '20px',
    minHeight: '100vh',
    backgroundColor: AppColors.backgroundColor
  },
  title: { fontSize: '20px', fontWeight: '600', marginBottom: '16px' },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  item: {
    padding: '16px',
    backgroundColor: AppColors.primaryColor,
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'transform 0.2s'
  },
  itemList: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: AppColors.white,
    cursor: 'pointer'
  }
}
