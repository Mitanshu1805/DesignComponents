import { BusinessApis } from '@renderer/networking/businessApis'
import { useEffect, useState } from 'react'
import OutletComponent from './OutletListComponent'
import { useLocation, useNavigate } from 'react-router-dom'

export default function OutletController() {
  const location = useLocation()
  const navigate = useNavigate()
  const [outletList, setOutletList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    BusinessApis.getOutletList(location.state.authToken, setOutletList, setIsLoading)
  }, [location.state.authToken])

  const onOutletPress = (item: any) => {
    navigate('/addTerminal', {
      state: { authToken: location.state.authToken, outlet_details: item }
    })
  }
  return (
    <OutletComponent outletList={outletList} isLoading={isLoading} onOutletPress={onOutletPress} />
  )
}
