import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './server/models/Waitlist.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ["https://fitness-wingman.vercel.app", "http://localhost:5173", "http://localhost:5000"],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(bodyParser.json());

// Get waitlist count
app.get('/api/waitlist/count', async (req, res) => {
  try {
    const result = await pool.query('SELECT COUNT(*) FROM waitlist');
    res.json({ count: parseInt(result.rows[0].count) });
  } catch (error) {
    console.error('Error getting count:', error);
    res.status(500).json({ error: 'Failed to get waitlist count' });
  }
});

// Add to waitlist
app.post('/api/waitlist', async (req, res) => {
  const { email } = req.body;
  
  try {
    // Insert email into database
    await pool.query('INSERT INTO waitlist (email) VALUES ($1)', [email]);
    
    // Get updated count
    const countResult = await pool.query('SELECT COUNT(*) FROM waitlist');
    const count = parseInt(countResult.rows[0].count);

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Fitness Bestie!',
      text: `Hello,

Thank you for enrolling in Fitness Bestie! We're excited to have you on board and will notify you shortly with more updates.

Best regards,
Fitness Bestie Team`,
    };

    // Send email using Promise
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully', count });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to process request' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Add error handling
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Keep the process alive
setInterval(() => {}, 1000);