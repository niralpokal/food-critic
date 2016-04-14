var express = require('express');
var app = express();
var middleware = express.static('./public/');

app.use(middleware);
app.get('/', function(req, res) {
})

var port = process.env.PORT || 8080;
app.listen(port, function(){});
