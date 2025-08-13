import Card from '../components/Card'
import './Page.scss'

export default function Insights() {
  return (
    <div className="page">
      <Card title="Insights">
        <ul>
          <li>Top prompts impacting latency</li>
          <li>Frequent error patterns</li>
          <li>Token usage anomalies</li>
        </ul>
      </Card>
    </div>
  )
}
