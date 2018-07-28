var bodyParser = require("body-parser");
var express = require('express');
var path = require('path');
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('app/public'));
// app.use(function (reg, res) {
//     res.setHeader('Content-type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2));
// });

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})




