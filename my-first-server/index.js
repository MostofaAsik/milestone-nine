const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('MAS Server');

})

app.get('/data', (res, req) => {
    res.send('More Info Coming Soooooon');

})

app.listen(port, () => {
    console.log(`My First server is running on port:${port}`);
})