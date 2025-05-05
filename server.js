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
    // Check if email already exists
    const existingEmail = await pool.query('SELECT email FROM waitlist WHERE email = $1', [email]);
    let isNewRegistration = existingEmail.rows.length === 0;
    
    // Configure Nodemailer once - reuse for both cases
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465, // Changed to 465 for SSL
      secure: true, // Changed to true for SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true // Enable debug logs
    });

    // Verify transporter configuration
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    if (!isNewRegistration) {
      const countResult = await pool.query('SELECT COUNT(*) FROM waitlist');
      const count = parseInt(countResult.rows[0].count);
      
      const reminderMailOptions = {
        from: {
          name: 'Fitness Bestie',
          address: process.env.EMAIL_USER
        },
        to: email,
        replyTo: process.env.EMAIL_USER,
        subject: "You're Already Part of Fitness Bestie!",
        html: `
          <div style="font-family: Arial, sans-serif; color: #222;">
            <h2>Welcome Back to Fitness Bestie!</h2>
            <p>We noticed you tried to join our waitlist again. Don't worry - you're already on our list!</p>
            <p>We're excited to have you as part of our community and will keep you updated with all the latest news.</p>
            <br>
            <p>Best regards,<br>Fitness Bestie Team</p>
          </div>
        `,
        text: "Welcome Back to Fitness Bestie!\n\nWe noticed you tried to join our waitlist again. Don't worry - you're already on our list!\n\nWe're excited to have you as part of our community and will keep you updated with all the latest news.\n\nBest regards,\nFitness Bestie Team"
      };

      const newRegistrationMailOptions = {
        from: {
          name: 'Fitness Bestie',
          address: process.env.EMAIL_USER
        },
        to: email,
        replyTo: process.env.EMAIL_USER,
        subject: "Welcome to Fitness Bestie!",
        html: `
          <div style="font-family: Arial, sans-serif; color: #222;">
            <h2>Welcome to Fitness Bestie!</h2>
            <p>Thank you for enrolling in Fitness Bestie! We're excited to have you on board and will notify you shortly with more updates.</p>
            <br>
            <p>Best regards,<br>Fitness Bestie Team</p>
          </div>
        `,
        text: "Welcome to Fitness Bestie!\n\nThank you for enrolling in Fitness Bestie! We're excited to have you on board and will notify you shortly with more updates.\n\nBest regards,\nFitness Bestie Team"
      };

      try {
        const info = await transporter.sendMail(reminderMailOptions);
        console.log('Reminder email sent successfully. Message ID:', info.messageId);
        return res.status(200).json({ 
          message: 'You are already on the waitlist!',
          count,
          alreadyExists: true,
          emailSent: true
        });
      } catch (emailError) {
        console.error('Reminder email sending error:', emailError);
        throw emailError; // Propagate email error
      }
    }

    // For new registration
    await pool.query('INSERT INTO waitlist (email) VALUES ($1)', [email]);
    const countResult = await pool.query('SELECT COUNT(*) FROM waitlist');
    const count = parseInt(countResult.rows[0].count);

    const newRegistrationMailOptions = {
      from: `"Fitness Bestie" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Welcome to Fitness Bestie!',
      html: `
        <h2>Welcome to Fitness Bestie!</h2>
        <p>Thank you for enrolling in Fitness Bestie! We're excited to have you on board and will notify you shortly with more updates.</p>
        <br>
        <p>Best regards,<br>Fitness Bestie Team</p>
      `,
      text: 'Welcome to Fitness Bestie! Thank you for enrolling. We\'re excited to have you on board and will notify you shortly with more updates.'
    };

    try {
      const info = await transporter.sendMail(newRegistrationMailOptions);
      console.log('Welcome email sent successfully. Message ID:', info.messageId);
      res.status(200).json({ 
        message: 'Email sent successfully', 
        count,
        emailSent: true 
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      throw emailError; // Propagate email error
    }
    
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: 'Failed to process request',
      details: error.message 
    });
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