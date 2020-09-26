const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3005;
const publicPath = path.join(__dirname, '..' , 'public');

// console.log(publicPath);
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    console.log('ssss');
    res.sendFile(path.join(publicPath, 'index.html'));
 });

app.listen(port, () => {
    console.log(`Serverrrr is up on port ${port}!`);
 });