const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('main', { title : `Cha Seung Cheol's Portfolio` });
});

module.exports = router;