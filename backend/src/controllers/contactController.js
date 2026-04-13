const { pool } = require('../db')
const { sendContactEmail, sendReferralEmail } = require('../emailService')

function sanitize(str) {
  if (!str) return ''
  return String(str).trim().replace(/[<>]/g, '')
}

async function submitContact(req, res) {
  const name = sanitize(req.body.name)
  const email = sanitize(req.body.email)
  const phone = sanitize(req.body.phone)
  const subject = sanitize(req.body.subject)
  const message = sanitize(req.body.message)

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  if (name.length > 100 || message.length > 2000) {
    return res.status(400).json({ error: 'Input too long' })
  }

  try {
    await pool.query(
      'INSERT INTO contacts (name, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5)',
      [name, email, phone, subject, message]
    )
    sendContactEmail({ name, email, phone, subject, message }).catch(err =>
      console.error('Email error:', err.message)
    )
    res.json({ success: true, message: 'Message sent successfully' })
  } catch (err) {
    console.error('Contact submit error:', err.message)
    res.status(500).json({ error: 'Failed to send message' })
  }
}

async function submitReferral(req, res) {
  const referrerName = sanitize(req.body.referrerName)
  const referrerEmail = sanitize(req.body.referrerEmail)
  const referrerPhone = sanitize(req.body.referrerPhone)
  const refereeName = sanitize(req.body.refereeName)
  const refereeEmail = sanitize(req.body.refereeEmail)
  const refereePhone = sanitize(req.body.refereePhone)

  if (!referrerName || !referrerEmail || !refereeName || !refereeEmail) {
    return res.status(400).json({ error: 'Referrer and candidate name/email are required' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(referrerEmail) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(refereeEmail)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  try {
    await pool.query(
      'INSERT INTO referrals (referrer_name, referrer_email, referrer_phone, referee_name, referee_email, referee_phone) VALUES ($1, $2, $3, $4, $5, $6)',
      [referrerName, referrerEmail, referrerPhone, refereeName, refereeEmail, refereePhone]
    )
    sendReferralEmail({ referrerName, referrerEmail, referrerPhone, refereeName, refereeEmail, refereePhone }).catch(err =>
      console.error('Referral email error:', err.message)
    )
    res.json({ success: true, message: 'Referral submitted successfully' })
  } catch (err) {
    console.error('Referral submit error:', err.message)
    res.status(500).json({ error: 'Failed to submit referral' })
  }
}

module.exports = { submitContact, submitReferral }
