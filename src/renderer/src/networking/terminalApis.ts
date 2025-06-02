import { URLS } from '../utils/constants'
import axiosInterceptor from './interceptors'

const addTerminal = async (
  token: string,
  session_duration: string,
  device_id: string,
  outlet_id: string,
  fcm_token: any,
  device_name: string,
  loading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    loading(true)
    const response = await axiosInterceptor({
      method: 'POST',
      url: URLS.terminal.add,
      data: {
        session_duration: session_duration,
        device_id: device_id,
        outlet_id: outlet_id,
        fcm_token: fcm_token,
        device_name: device_name ? device_name : null
      },
      headers: {
        Authorization: token
      }
    })
    return response.data
  } catch (error: any) {
    alert(error?.data?.message)
    return false
  } finally {
    loading(false)
  }
}

export const TerminalApis = {
  addTerminal
}
