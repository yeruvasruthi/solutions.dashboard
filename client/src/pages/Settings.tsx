import Card from '../components/Card'
import './Page.scss'

export default function Settings() {
  return (
    <div className="page">
      <Card title="Settings">
        <p>Manage API keys, alert thresholds, and theme.</p>
      </Card>
    </div>
  )
}
