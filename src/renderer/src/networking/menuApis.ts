import { LocalStorageKey, URLS } from '../utils/constants'
import axiosInterceptor from './interceptors'

const getListCategories = async () => {
  try {
    const response = await axiosInterceptor({
      method: 'GET',
      url: URLS.menu.getCategoryWithItem
    })

    const updatedData = response.data?.data?.map((category: any) => ({
      ...category,
      items: category.items?.map((item: any) => ({
        ...item,
        quantity: 0
      }))
    }))
    localStorage.setItem(LocalStorageKey.MENU_DATA, JSON.stringify(updatedData ?? []))
    return updatedData ?? []
  } catch (error: any) {
    throw new Error(error)
  }
}

export const MenuAPIs = {
  getListCategories
}
