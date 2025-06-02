import { TerminalApis } from '@renderer/networking/terminalApis'
import { LocalStorageKey } from '@renderer/utils/constants'
import { useEffect, useState } from 'react'
import AddTerminalComponent from './AddTerminalComponent'
import { useLocation, useNavigate } from 'react-router-dom'

export default function AddTerminalController() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [deviceInfo, setDeviceInfo] = useState<any>({})
  const [selectedValue, setSelectedValue] = useState<string>('')

  const validityList = [
    { id: 1, name: '1 Day', value: '1d' },
    { id: 2, name: '1 Week', value: '1w' },
    { id: 3, name: '1 Month', value: '1m' },
    { id: 4, name: '1 Year', value: '1y' },
    { id: 5, name: 'No Expiry', value: 'no_expiry' }
  ]

  useEffect(() => {
    requestUserPermission()
  }, [])

  async function requestUserPermission() {
    const fcm_token = 'mocked_token_desktop'
    const device_id = 'electron-device-id'
    const device_name = 'Electron Desktop'
    if (device_id && fcm_token) {
      setDeviceInfo(JSON.stringify({ device_id, fcm_token, device_name }))
    }
  }

  const onCreateValidity = async () => {
    const response = await TerminalApis.addTerminal(
      location.state.authToken,
      selectedValue,
      'electron-device-id',
      location.state.outlet_details?.outlet_id,
      'mocked_token_desktop',
      'Electron Desktop',
      setIsLoading
    )
    if (response?.success) {
      setSelectedValue('')
      localStorage.setItem(LocalStorageKey.AUTH_TOKEN, response?.data.token)
      localStorage.setItem(
        LocalStorageKey.MESSAGE_DATA,
        JSON.stringify({
          business_name: response?.data.business_name,
          outlet_name: response?.data.outlet_name,
          newTerminalName: response?.data.newTerminalName,
          outlet_logo: response?.data.outlet_logo
        })
      )
      navigate('/home')
    }
  }

  return (
    <AddTerminalComponent
      isLoading={isLoading}
      validityList={validityList}
      selectedValue={selectedValue}
      onCreateValidity={onCreateValidity}
      setSelectedValue={setSelectedValue}
    />
  )
}
