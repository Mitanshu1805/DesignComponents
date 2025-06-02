import { useEffect, useState } from 'react'
import { BusinessApis } from '../../networking/businessApis'
import { LocalStorageKey } from '@renderer/utils/constants'
import BusinessListComponent from './BusinessListComponent'
import { useLocation, useNavigate } from 'react-router-dom'

export default function BusinessListController() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [businessList, setBusinessList] = useState([])

  useEffect(() => {
    BusinessApis.getBusinessList(location.state.authToken, setBusinessList, setIsLoading)
  }, [location.state.authToken])

  const onBusinessSelection = (item: any) => {
    localStorage.setItem(LocalStorageKey.BUSINESS_DETAILS, JSON.stringify(item))
    navigate('/outletList', { state: { authToken: location.state.authToken } })
  }

  return (
    <BusinessListComponent
      isLoading={isLoading}
      businessList={businessList}
      onBusinessSelection={onBusinessSelection}
    />
  )
}
