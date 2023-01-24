const express = require('express');

const router = express.Router();

// Home Page
router.get('/', (req, res) => {
  try {
    res.status(200).json({
      status: 'Success',
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
