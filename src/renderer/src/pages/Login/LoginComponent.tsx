import { AppColors } from '@renderer/utils/Colors'
import QRCode from 'react-qr-code'

interface LoginComponentProps {
  error: boolean
  isLoading: boolean
  qrValue: string
  modalVisible: boolean
  setModalVisible: (value: boolean) => void
  phoneNumber: string
  setPhoneNumber: (value: string) => void
  onGetOTP: () => void
  contactUsPress: () => void
}

export default function LoginComponent({
  error,
  isLoading,
  qrValue,
  phoneNumber,
  modalVisible,
  setModalVisible,
  setPhoneNumber,
  onGetOTP,
  contactUsPress
}: LoginComponentProps) {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: AppColors.backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          backgroundColor: AppColors.white,
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
          borderRadius: '1rem',
          padding: '2rem',
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center'
        }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>Login</h2>
        <p style={{ color: AppColors.stepperBorderColor, marginBottom: '1.5rem' }}>
          Enter your mobile number to continue
        </p>

        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone number"
          style={{
            width: '100%',
            padding: '0.5rem 1rem',
            border: `1px solid ${error ? '#f87171' : '#d1d5db'}`,
            borderRadius: '0.5rem',
            outline: 'none',
            marginBottom: '1rem',
            boxSizing: 'border-box'
          }}
        />

        <button
          onClick={onGetOTP}
          disabled={isLoading}
          style={{
            width: '100%',
            backgroundColor: AppColors.primaryColor,
            color: AppColors.white,
            padding: '0.5rem',
            borderRadius: '0.5rem',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.5 : 1,
            marginBottom: '1rem',
            border: 'none',
            transition: 'background-color 0.3s'
          }}
        >
          {isLoading ? 'Sending...' : 'Get OTP'}
        </button>

        {/* <div
          style={{
            height: '1px',
            backgroundColor: '#e5e7eb',
            margin: '1rem 0'
          }}
        />

        <button
          onClick={() => setModalVisible(true)}
          style={{
            width: '100%',
            backgroundColor: AppColors.primaryColor,
            color: AppColors.white,
            padding: '0.5rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            marginBottom: '0.5rem',
            border: 'none',
            transition: 'background-color 0.3s'
          }}
        >
          Login with QR
        </button>

        <button
          onClick={contactUsPress}
          style={{
            width: '100%',
            color: AppColors.primaryColor,
            background: 'none',
            border: 'none',
            marginTop: '1rem',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
        >
          Contact Us
        </button> */}

        {/* Modal */}
        {modalVisible && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999
            }}
          >
            <div
              style={{
                backgroundColor: AppColors.white,
                borderRadius: '1rem',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                padding: '1.5rem',
                width: '100%',
                maxWidth: '360px',
                textAlign: 'center',
                position: 'relative'
              }}
            >
              <p style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>
                Scan this QR code to login
              </p>
              {qrValue === 'hello' ? (
                <p style={{ color: '#6b7280', marginBottom: '1rem' }}>Waiting for permission...</p>
              ) : (
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                  <QRCode value={qrValue} />
                </div>
              )}
              <button
                onClick={() => setModalVisible(false)}
                style={{
                  position: 'absolute',
                  top: '0.5rem',
                  right: '0.75rem',
                  color: '#6b7280',
                  background: 'none',
                  border: 'none',
                  fontSize: '1.25rem',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
