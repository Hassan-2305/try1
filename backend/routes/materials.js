const express = require('express');
const router = express.Router();

// Mock Data
const materials = {
    "2019": {
        "S1": [{ subject: "Calculus", link: "#" }, { subject: "Physics", link: "#" }],
        "S8": [{ subject: "Project", link: "#" }]
    },
    "2023": {
        "S1": [{ subject: "Maths 1", link: "#" }, { subject: "Chemistry", link: "#" }]
    }
};

router.get('/', (req, res) => {
    res.json(materials);
});

module.exports = router;
