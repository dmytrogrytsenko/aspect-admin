var liveServer = require("live-server");
 
var params = {
    root: "./bin",
	port: 8080,  
	host: "0.0.0.0",  
	file: "index.html",  
	wait: 1000 
};

liveServer.start(params);