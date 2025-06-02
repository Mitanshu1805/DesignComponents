import { LocalStorageKey, URLS } from '../utils/constants'
import axiosInterceptor from './interceptors'

const getLanguageList = async (setLanguageList: React.Dispatch<React.SetStateAction<any[]>>) => {
  try {
    const response = await axiosInterceptor({
      method: 'GET',
      url: URLS.language.listLanguage
    })
    setLanguageList(response?.data?.data?.List ?? [])
    return true
  } catch (error: any) {
    setLanguageList([])
    return false
  }
}
const getSelectedLanguage = async (setSelectedLanguage: (value: string) => void) => {
  try {
    const response = await axiosInterceptor({
      method: 'GET',
      url: URLS.users.getDetails
    })
    setSelectedLanguage(response?.data?.data?.preferred_language ?? '')
    return response?.status
  } catch (error: any) {
    return false
  }
}
const getLogoutApi = async () => {
  try {
    await axiosInterceptor({
      method: 'GET',
      url: URLS.users.getLogout
    })
    return true
  } catch (error: any) {
    return false
  }
}
const updateSelectedLanguage = async (
  language: string,
  setUpdateLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setUpdateLoading(true)
    await axiosInterceptor({
      method: 'PUT',
      url: URLS.language.updateLanguage,
      data: {
        preferred_language: language
      }
    })
    localStorage.setItem(LocalStorageKey.LANGUAGE_SELECTION, language)
    return true
  } catch (error: any) {
    return false
  } finally {
    setUpdateLoading(false)
  }
}

export const UserSettingApis = {
  getLogoutApi,
  getLanguageList,
  getSelectedLanguage,
  updateSelectedLanguage
}
