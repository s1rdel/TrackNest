const express = require('express');
const router = express.Router();
const pages = require('../controllers/pages');

router.get('/', pages.library);

router.get('/library', pages.library);
router.get('/login', pages.login);
router.get('/register', pages.register);

module.exports = router;
