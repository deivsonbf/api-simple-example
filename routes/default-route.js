const express = require('express');
const router = express.Router();

const defaultController = require('../controllers/default-Controller')

router.get('/', defaultController.index)

module.exports = router;