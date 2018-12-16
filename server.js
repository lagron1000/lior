const express = require('express');
const path = require('path');
const app = express();


app.use(express.static('node_modules'));
app.use(express.static(path.join(__dirname, 'dist/lior')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/lior/index.html'));
});

app.listen(process.env.PORT || '8080', () => { console.log("Server started on port 8080"); });