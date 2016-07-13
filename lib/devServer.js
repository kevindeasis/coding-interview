var express = require('express');
var app = express();
var path = require('path');

app.use('/static', express.static(path.join(__dirname, '../dist/')));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '../src/html', 'index.html'));
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});

