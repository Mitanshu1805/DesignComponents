import { useEffect, useRef, useState } from 'react'
import OtpComponent from './OtpComponent'
import { AuthAPIs } from '@renderer/networking/authApis'
import { useLocation, useNavigate } from 'react-router-dom'
import { LocalStorageKey } from '@renderer/utils/constants'
import { BusinessApis } from '@renderer/networking/businessApis'

export default function OtpController() {
  const location = useLocation()
  const navigate = useNavigate()
  const [otp, setOtp] = useState(Array(6).fill(''))
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [businessList, setBusinessList] = useState([])
  const inputsRef = useRef<Array<HTMLInputElement | null>>([])

  useEffect(() => {
    const authToken = localStorage.getItem(LocalStorageKey.AUTH_TOKEN)
    if (businessList?.length > 0) {
      if (businessList?.length > 1) {
        navigate('/businessList', { state: { authToken: authToken } })
      } else {
        localStorage.setItem(LocalStorageKey.BUSINESS_DETAILS, JSON.stringify(businessList[0]))
        navigate('/outletList', { state: { authToken: authToken } })
      }
    }
  }, [businessList, navigate])

  const verifyOTP = async () => {
    if (otp.filter((digit) => digit !== '').length === 6) {
      setError(false)
      const otpString = otp.join('')
      const response = await AuthAPIs.verifyOtp(location.state.phoneNumber, otpString, setIsLoading)
      if (response) {
        await BusinessApis.getBusinessList(response, setBusinessList, setIsLoading)
      }
    } else {
      setError(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const val = e.target.value
    if (!/^\d?$/.test(val)) return // only allow digits, max 1 digit

    const newOtp = [...otp]
    newOtp[idx] = val
    setOtp(newOtp)

    if (val && idx < 5) {
      inputsRef.current[idx + 1]?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('Text').slice(0, 6)
    if (!/^\d+$/.test(pastedData)) return

    const newOtp = pastedData.split('').concat(Array(6).fill('')).slice(0, 6)
    setOtp(newOtp)
    inputsRef.current[Math.min(pastedData.length, 5)]?.focus()
  }

  return (
    <OtpComponent
      otp={otp}
      inputsRef={inputsRef}
      previousOTP={location?.state.otp}
      handleChange={handleChange}
      handleKeyDown={handleKeyDown}
      handlePaste={handlePaste}
      verifyOTP={verifyOTP}
    />
  )
}
