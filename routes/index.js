const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('main', { title : 'FroK 포트폴리오' });
});

module.exports = router;