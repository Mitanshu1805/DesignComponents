import { LocalStorageKey, URLS } from '../utils/constants'
import axiosInterceptor from './interceptors'

const sendOtp = async (
  phone_number: string,
  loading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    loading(true)
    const response = await axiosInterceptor({
      method: 'POST',
      url: URLS.auth.sendOtp,
      data: {
        phone_number: phone_number
      }
    })
    return response.data
  } catch (error: any) {
    console.log('🚀 ~ error:', error)
    alert(error?.data?.message)
    return false
  } finally {
    loading(false)
  }
}
const verifyOtp = async (
  phone_number: string,
  otp: string,
  loading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    loading(true)
    const response = await axiosInterceptor({
      method: 'POST',
      url: URLS.auth.verifyOtp,
      data: {
        phone_number: phone_number,
        otp: otp
      }
    })
    localStorage.setItem(LocalStorageKey.AUTH_TOKEN, response.data?.data?.detail?.auth_token)
    return response.data?.data?.detail?.auth_token
  } catch (error: any) {
    alert(error?.data?.message)
    return false
  } finally {
    loading(false)
  }
}

export const AuthAPIs = { sendOtp, verifyOtp }
