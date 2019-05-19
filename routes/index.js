const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

//Dashboard
router.get('/game', ensureAuthenticated, (req, res) => 
    res.render('game', {
        name: req.user.name
}));

router.get('/profile', ensureAuthenticated, (req, res) => 
    res.render('profile', {
        name: req.user.name
}));
module.exports = router;