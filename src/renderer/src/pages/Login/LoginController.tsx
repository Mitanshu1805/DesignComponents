import { AuthAPIs } from '@renderer/networking/authApis'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginComponent from './LoginComponent'

export default function LoginController() {
  const navigate = useNavigate()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [qrValue, setQrValue] = useState('hello')
  const [modalVisible, setModalVisible] = useState(false)

  const onGetOTP = async () => {
    if (phoneNumber?.length === 10) {
      setError(false)
      const getOtp = await AuthAPIs.sendOtp(phoneNumber, setIsLoading)
      if (getOtp?.success) {
        navigate('/otp', { state: { phoneNumber: phoneNumber, otp: getOtp?.data.otp } })
      }
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    requestUserPermission()
  }, [])

  async function requestUserPermission() {
    const fcm_token = 'mocked_token_desktop'
    const device_id = 'electron-device-id'
    const device_name = 'Electron Desktop'
    if (device_id && fcm_token) {
      setQrValue(JSON.stringify({ device_id, fcm_token, device_name }))
    }
  }

  // async function onMessageReceived(message: any) {
  //   if (message?.data?.token) {
  //     localStorage.setItem(LocalStorageKey.AUTH_TOKEN, message?.data.token)
  //     localStorage.setItem(
  //       LocalStorageKey.MESSAGE_DATA,
  //       JSON.stringify({
  //         business_name: message?.data.business_name,
  //         outlet_name: message?.data.outlet_name,
  //         newTerminalName: message?.data.newTerminalName,
  //         outlet_logo: message?.data.outlet_logo
  //       })
  //     )
  //   }
  // }

  const contactUsPress = () => {
    alert('Redirect to contact page')
  }

  return (
    <LoginComponent
      error={error}
      qrValue={qrValue}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      onGetOTP={onGetOTP}
      phoneNumber={phoneNumber}
      setPhoneNumber={setPhoneNumber}
      isLoading={isLoading}
      contactUsPress={contactUsPress}
    />
  )
}
