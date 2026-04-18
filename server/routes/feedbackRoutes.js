const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback'); // Importing the database model

// POST route to save feedback
router.post('/', async (req, res) => {
  try {
    const { name, email, issueType, message } = req.body;
    
    const newFeedback = new Feedback({
      name,
      email,
      issueType,
      message
    });

    const savedFeedback = await newFeedback.save();
    res.status(201).json({ message: 'Feedback saved successfully', feedback: savedFeedback });
  } catch (error) {
    console.error('Feedback save error:', error);
    res.status(500).json({ error: 'Server error while saving feedback' });
  }
});

// GET route to fetch all feedback (for admin use later)
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json({ count: feedbacks.length, feedback: feedbacks });
  } catch (error) {
    res.status(500).json({ error: 'Server error while fetching feedback' });
  }
});

module.exports = router;