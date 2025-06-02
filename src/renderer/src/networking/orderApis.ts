import moment from 'moment'
import { LocalStorageKey, URLS } from '../utils/constants'
import axiosInterceptor from './interceptors'

const createOrder = async (
  order_time: any,
  is_takeaway: boolean,
  payment_mode: string,
  items: any[]
) => {
  try {
    await axiosInterceptor({
      method: 'POST',
      url: URLS.order.createOrder,
      data: {
        order_time: moment(order_time),
        is_takeaway: is_takeaway,
        payment_mode: payment_mode,
        items: items
      },
      timeout: 5000
    })

    return true
  } catch (error: any) {
    return false
  }
}
const createOfflineOrder = async (orders: any[]) => {
  try {
    await axiosInterceptor({
      method: 'POST',
      url: URLS.order.createOfflineOrder,
      data: {
        orders: orders
      }
    })
    localStorage.removeItem(LocalStorageKey.OFFLINE_ORDER_DATA)
    return true
  } catch (error: any) {
    return false
  }
}

const getOrderList = async (page_number: number, loading: (value: boolean) => void) => {
  try {
    loading(true)
    const response = await axiosInterceptor({
      method: 'POST',
      url: URLS.order.list,
      data: {
        page: page_number
      }
    })
    return response?.data
  } catch (error: any) {
    return false
  } finally {
    loading(false)
  }
}

const changePaymentMode = async (
  order_id: string,
  payment_mode: string,
  loading: (value: boolean) => void
) => {
  try {
    loading(true)
    await axiosInterceptor({
      method: 'PUT',
      url: URLS.order.updatePaymentMode,
      data: {
        order_id: order_id,
        payment_mode: payment_mode
      }
    })
    return true
  } catch (error: any) {
    return false
  } finally {
    loading(false)
  }
}

export const OrderAPIs = {
  createOrder,
  createOfflineOrder,
  getOrderList,
  changePaymentMode
}
