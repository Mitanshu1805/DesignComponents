import { LocalStorageKey, URLS } from '../utils/constants'
import axiosInterceptor from './interceptors'

const getBusinessList = async (
  token: string,
  setBusinessList: React.Dispatch<React.SetStateAction<never[]>>,
  loading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    loading(true)
    const response = await axiosInterceptor({
      method: 'GET',
      url: URLS.business.business,
      headers: {
        Authorization: token
      }
    })
    setBusinessList(response.data.data?.list ?? [])
    return true
  } catch (error: any) {
    return false
  } finally {
    loading(false)
  }
}
const getOutletList = async (
  token: string,
  setOutletList: React.Dispatch<React.SetStateAction<never[]>>,
  loading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    loading(true)
    const data = JSON.parse(localStorage.getItem(LocalStorageKey.BUSINESS_DETAILS) ?? '')
    const response = await axiosInterceptor({
      method: 'POST',
      url: URLS.business.outlet,
      data: {
        business_id: data?.business_id
      },
      headers: {
        Authorization: token
      }
    })
    setOutletList(response.data.data?.OutletsLists ?? [])
    return true
  } catch (error: any) {
    return false
  } finally {
    loading(false)
  }
}

export const BusinessApis = { getBusinessList, getOutletList }
