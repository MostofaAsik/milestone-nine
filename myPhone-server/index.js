const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('My Phone Information coming soon')

})

app.listen(port, () => {
    console.log(`This is runnig on:${port}`);

})