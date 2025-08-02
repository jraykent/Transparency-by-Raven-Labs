import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)

  const analyzeText = async () => {
    const res = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': ' 'application/json',
      },
      body: JSON.stringify({ text: input }),
    })
    const data = await res.json()
    setResult(data)
  }

  return (
    <div>
      <Head>
        <title>Transparency by Raven Labs</title>
        <meta name="description" content="See through the noise. Analyze bias, persuasion, and misinformation in real time." />
      </Head>

      <main style={{ padding: '2rem' }}>
        <h1>Welcome to Transparency</h1>
        <p>Built by Raven Labs — your browser companion for cutting through the noise.</p>

        <textarea
          rows="6"
          style={{ width: '100%', marginTop: '1rem' }}
          placeholder="Paste text or a link to analyze..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={analyzeText} style={{ marginTop: '1rem' }}>Run Transparency</button>

        {result && (
          <div style={{ marginTop: '2rem' }}>
            <h3>Results:</h3>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </main>
    </div>
  )
}
