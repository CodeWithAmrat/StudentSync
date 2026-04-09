const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// POST route to save new feedback
router.post('/', async (req, res) => {
  try {
    const { name, email, issueType, message } = req.body;

    // Validate required fields
    if (!name || !issueType || !message) {
      return res.status(400).json({
        error: 'Missing required fields: name, issueType, and message are required',
      });
    }

    // Create new feedback document
    const feedback = new Feedback({
      name,
      email,
      issueType,
      message,
    });

    // Save to database
    await feedback.save();

    res.status(201).json({
      message: 'Feedback saved successfully',
      feedback,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        error: 'Validation error',
        details: Object.values(error.errors).map((err) => err.message),
      });
    }
    res.status(500).json({
      error: 'Error saving feedback',
      details: error.message,
    });
  }
});

// GET route to retrieve all feedback
router.get('/', async (req, res) => {
  try {
    const feedback = await Feedback.find().sort({ createdAt: -1 });

    res.status(200).json({
      count: feedback.length,
      feedback,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Error retrieving feedback',
      details: error.message,
    });
  }
});

module.exports = router;
