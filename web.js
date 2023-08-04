function run(){
    var express = require('express');
    var app = express();
    var port = process.env.PORT || 5000;
    var publicDir = require('path').join(__dirname,'/public');

    app.use(express.static(publicDir));

    app.listen(port, function() {
        console.log('Webserver GUI is running! CTRL+Click here to open: http://localhost:' + port);
    });
}
module.exports = run;