import Layout from '@renderer/components/Layout'

interface HomeComponentProps {
  menuData: any
}

export default function HomeComponent({ menuData }: HomeComponentProps) {
  return (
    <div style={{ flex: 1 }}>
      <Layout menuData={menuData} />
    </div>
  )
}
