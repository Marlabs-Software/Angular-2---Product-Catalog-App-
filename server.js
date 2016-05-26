
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/'));

// viewed at http://localhost:8020
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
});

app.listen(8020, function(){
    console.log('App is running on port 8020');
});