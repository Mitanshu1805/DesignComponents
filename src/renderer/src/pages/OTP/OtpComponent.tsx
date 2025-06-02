import { AppColors } from '@renderer/utils/Colors'

interface OtpComponentProps {
  otp: any
  inputsRef: any
  previousOTP: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, idx: number) => void
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => void
  handlePaste: (e: React.ClipboardEvent<HTMLInputElement>) => void
  verifyOTP: () => void
}

export default function OtpComponent({
  otp,
  inputsRef,
  previousOTP,
  handleChange,
  handleKeyDown,
  handlePaste,
  verifyOTP
}: OtpComponentProps) {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: AppColors.backgroundColor,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
    >
      <h1 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 600 }}>Enter OTP</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '1.5rem'
        }}
      >
        {otp.map((digit: string, idx: number) => (
          <input
            key={idx}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            onPaste={handlePaste}
            ref={(el) => (inputsRef.current[idx] = el)}
            autoFocus={idx === 0}
            style={{
              width: '3rem',
              height: '3rem',
              textAlign: 'center',
              fontSize: '1.25rem',
              borderRadius: '0.5rem',
              border: '1px solid #d1d5db',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        ))}
      </div>
      <div>
        <h5>Enter otp: {previousOTP}</h5>
      </div>

      <button
        onClick={verifyOTP}
        style={{
          backgroundColor: AppColors.primaryColor,
          color: AppColors.white,
          padding: '0.5rem 1.5rem',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          border: 'none',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => {
          ;(e.target as HTMLButtonElement).style.backgroundColor = AppColors.deleteColor
        }}
        onMouseOut={(e) => {
          ;(e.target as HTMLButtonElement).style.backgroundColor = AppColors.primaryColor
        }}
      >
        Verify OTP
      </button>
    </div>
  )
}
