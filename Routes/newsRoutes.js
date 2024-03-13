const express = require('express');
const { Fetchnews } = require('../Controller/newsController');

const router = express.Router();

router.get("/news", Fetchnews);

module.exports = router;
