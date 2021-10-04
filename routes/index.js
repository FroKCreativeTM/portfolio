const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('main', { title : `Cha Seung Cheol's Portfolio` });
});

router.get('/javascript', (req, res) => {
    fs.readFile('./src/javascript.png', (err, data) => {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });
});

router.get('/nodejs', (req, res) => {
    fs.readFile('./src/nodejs.png', (err, data) => {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });
});

router.get('/aws', (req, res) => {
    fs.readFile('./src/aws.png', (err, data) => {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });
});

router.get('/linux', (req, res) => {
    fs.readFile('./src/linux.png', (err, data) => {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });
});

module.exports = router;