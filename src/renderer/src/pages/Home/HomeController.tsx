import { MenuAPIs } from '@renderer/networking/menuApis'
import { useEffect, useState } from 'react'
import HomeComponent from './HomeComponent'

export default function HomeController() {
  const [menuData, setMenuData] = useState<any>([])

  useEffect(() => {
    async function fetchCategories() {
      const response = await MenuAPIs.getListCategories()
      setMenuData(response)
    }

    fetchCategories()
  }, [])

  return <HomeComponent menuData={menuData} />
}
