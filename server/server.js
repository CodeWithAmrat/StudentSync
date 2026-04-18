require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Import routes
const feedbackRoutes = require('./routes/feedbackRoutes');

// Middleware
// 🚀 DEPLOYMENT UPDATE: Configured CORS for Vercel
// Middleware
app.use(cors({
  origin: [
    'https://studentsync-plum.vercel.app', 
    'http://localhost:5173'
  ],
  credentials: true
}));
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/studentsync')
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Basic Routes
app.get('/', (req, res) => {
  res.json({ message: 'StudentSync API is running' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is healthy' });
});

// API Routes
app.use('/api/feedback', feedbackRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});