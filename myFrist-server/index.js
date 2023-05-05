const express = require('express');
const app = express();
const port = 5000;
app.get('/', (req, res) => {
    res.send('MAS SErver Again');

})
app.get('/data', (req, res) => {
    res.send('More Data Comming Soon again')

})
app.listen(port, () => {
    console.log(`My First server is running on port: ${port}`);
})