const express = require('express');
const router = express.Router();

// Mock Data
const newsletters = [
    { id: 1, title: "January 2024 Edition", link: "#", cover: "https://via.placeholder.com/150" }
];

router.get('/', (req, res) => {
    res.json(newsletters);
});

module.exports = router;
