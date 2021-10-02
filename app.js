const express = require('express');

const app = express();

app.set('PORT', 8080);
app.listen(app.get('PORT'), () => {
    console.log(app.get('PORT'), '에서 대기중');
})