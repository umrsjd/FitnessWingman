import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/waitlist', (req, res) => {
  const { email } = req.body;
  console.log(`Received email: ${email}`);

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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  });
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