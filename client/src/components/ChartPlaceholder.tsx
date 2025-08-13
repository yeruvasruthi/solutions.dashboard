import Card from './Card'
export default function ChartPlaceholder({ label }: { label: string }) {
  return (
    <Card title={label}>
      <div style={{height:'200px', display:'grid', placeItems:'center', opacity:0.6}}>
        (Add your chart here)
      </div>
    </Card>
  )
}
