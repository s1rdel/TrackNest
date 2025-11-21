const express = require('express');
const router = express.Router();

const ctrlAuth = require('../controllers/auth');
const ctrlItems = require('../controllers/items');

router
    .route('/register')
    .post(ctrlAuth.register);

router
    .route('/login')
    .post(ctrlAuth.login);

router
    .route('/items')
    .get(ctrlItems.itemsList);

module.exports = router;
