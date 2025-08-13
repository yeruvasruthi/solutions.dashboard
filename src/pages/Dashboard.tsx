import Card from '../components/Card'
import ChartPlaceholder from '../components/ChartPlaceholder'
import './Page.scss'

export default function Dashboard() {
  return (
    <div className="page grid">
      <Card title="Summary">
        <p>Welcome to your AI/LLM insights dashboard. Replace placeholders with live widgets.</p>
      </Card>
      <ChartPlaceholder label="Model Usage Over Time" />
      <ChartPlaceholder label="Latency p95" />
      <ChartPlaceholder label="Cost by Endpoint" />
    </div>
  )
}
