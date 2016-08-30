var app = require('express')();
var http = require("http").Server(app);
var child_process = require("child_process");

//can screenshot coordinates to capture part of screen

app.get('/screenshot.png', function(req,res){
	
	child_process.exec('boxcutter.exe -c 0,0,3840,2160 screenshot.png', function(err){
    if(err) {
      res.status(503).send(err);
    } else {
       res.sendFile(__dirname + '\\screenshot.png')
	   //res.write("<img src=\"screenshot.png\">");
    }
  });

});

http.listen(8080, function(){
	console.log("Listening on *:8080");
});