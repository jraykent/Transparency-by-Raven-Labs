export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { text } = req.body

  if (!text) {
    return res.status(400).json({ error: 'Text is required for analysis' })
  }

  // Placeholder logic for demo purposes
  const analysis = {
    credibilityScore: 72,
    bias: 'Emotional',
    framing: 'Partisan',
    aiSignal: 'Weak 🤖',
    civicsNote: 'No legal distortion detected',
    inputPreview: text.slice(0, 100) + '...'
  }

  res.status(200).json(analysis)
}
