const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Resume = require("../models/resume.model");


router.get('/', (req, res) => {
 res.render("resumes/index");
});

router.get('/contact', (req, res) => {
 res.render("resumes/form");
});

module.exports = router;
