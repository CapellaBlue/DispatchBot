var express = require('express');
var app     = express();

var port = 4040;

app.use(express.static('public'));

app.listen(port, function(){
    console.log("======================");
    console.log("Running on port: " + port);
    console.log("Tell me all the things...");
    console.log("======================");
});
