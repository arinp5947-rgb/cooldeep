require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const contactRoutes = require('./src/routes/contact')
const jobRoutes = require('./src/routes/jobs')
const { initDb } = require('./src/db')

const app = express()

app.use(helmet())

app.use(cors({
  origin: (origin, callback) => {
    const allowed = [
      /^http:\/\/localhost/,
      /\.netlify\.app$/,
      /\.vercel\.app$/,
      /\.netlify\.live$/
    ]
    if (!origin || allowed.some(r => r.test(origin))) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}))

app.use(express.json({ limit: '10kb' }))

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests, please try again later' }
})

const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  message: { error: 'Too many form submissions, please try again later' }
})

app.use(globalLimiter)

app.get('/health', (req, res) => res.json({ status: 'ok' }))
app.use('/api/contact', formLimiter, contactRoutes)
app.use('/api/jobs', jobRoutes)

const PORT = process.env.PORT || 5000

initDb().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}).catch(err => {
  console.error('Failed to initialize DB:', err.message)
  process.exit(1)
})
