import axios from 'axios'
import { LocalStorageKey, URLS } from '../utils/constants'
import { dialog } from '@electron/remote'

// Create a cancel token source
let cancelTokenSource = axios.CancelToken.source()

const show403ErrorPopup = (error: any) => {
  cancelTokenSource.cancel('403 Unauthorized: Cancelling all requests')

  const onAlertButtonPress = async () => {
    localStorage.clear()
    cancelTokenSource = axios.CancelToken.source()
    axiosInterceptor.defaults.cancelToken = cancelTokenSource.token
  }

  // dialog
  //   .showMessageBox({
  //     type: 'error',
  //     title: 'Unauthorized Access',
  //     message: error.response?.data?.data?.message ?? 'Something went wrong!',
  //     buttons: ['OK']
  //   })
  //   .then(() => {
  //     onAlertButtonPress()
  //   })
}

const show401ErrorPopup = (error: any) => {
  cancelTokenSource.cancel('401 Unauthorized: Cancelling all requests')

  const onAlertButtonPress = async () => {
    localStorage.clear()
    cancelTokenSource = axios.CancelToken.source()
    axiosInterceptor.defaults.cancelToken = cancelTokenSource.token
    // navigate('Splash Screen')
  }

  // dialog
  //   .showMessageBox({
  //     type: 'warning',
  //     title: 'Session Expired',
  //     message: 'Please log in again.',
  //     buttons: ['OK']
  //   })
  //   .then(() => {
  //     onAlertButtonPress()
  //   })
}

/*
 * GROM APIS
 */

const axiosInterceptor = axios.create({
  baseURL: URLS.base,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInterceptor.interceptors.request.use((config) => {
  const authToken = localStorage.getItem(LocalStorageKey.AUTH_TOKEN)
  if (!config.headers.Authorization && authToken) {
    config.headers.Authorization = `Bearer ${authToken}`
  }
  return config
})

axiosInterceptor.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response) {
      if (error.response?.status === 403) {
        // Handle 403 error (Forbidden)
        show403ErrorPopup(error)
        return Promise.reject(error.response)
      } else if (error.response?.status === 401) {
        // Handle 401 error (Unauthorized)
        show401ErrorPopup(error)
        return Promise.reject(error.response)
      } else {
        return Promise.reject(error.response)
      }
    }
    return Promise.reject(error)
  }
)

export default axiosInterceptor
