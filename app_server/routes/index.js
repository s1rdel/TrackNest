const express = require('express');
const path = require('path');
const router = express.Router();

const ctrlPages = require('../controllers/pages');

const requireLogin = (req, res, next) => {
    if (!req.isAuthenticated()) return res.redirect('/login');
    next();
};

router.get('/', ctrlPages.home);

router.get('/login', ctrlPages.login);
router.post('/login', ctrlPages.loginPost);

router.get('/register', ctrlPages.register);
router.post('/register', ctrlPages.registerPost);

router.get('/library', requireLogin, ctrlPages.library);

router.get('/logout', (req, res, next) => {

    req.logout(function(err){
        if (err) return next(err);
    });

    req.session.save(err => {
        if (err) return next(err);
        res.redirect('/login');
    });

});

module.exports = router;
