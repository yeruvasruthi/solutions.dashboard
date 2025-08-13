import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/health', (_, res) => res.json({ ok: true }))

app.get('/api/insights', (_, res) => {
  res.json({
    topPrompts: [
      { prompt: 'Summarize document', count: 124 },
      { prompt: 'Generate code', count: 88 },
    ],
    latencyP95: 842,
    costByEndpoint: [
      { endpoint: '/v1/chat/completions', usd: 123.5 },
      { endpoint: '/v1/embeddings', usd: 17.9 },
    ],
  })
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`API on http://localhost:${port}`))
