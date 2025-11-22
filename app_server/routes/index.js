const express = require('express');
const path = require('path');
const router = express.Router();

const ctrlPages = require('../controllers/pages');

router.get('/', ctrlPages.home);

router.get('/login', ctrlPages.login);
router.get('/register', ctrlPages.register);

router.get('/library', ctrlPages.library);

module.exports = router;
