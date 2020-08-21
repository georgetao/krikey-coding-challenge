var restify = require('restify');

function hello_world(req, res) {
	if (req.params.name == "") {
		res.send("ERROR: 400 Bad Request - Please provide a name.");
	}
	else {
		res.send("Hello " + req.params.name + "!");
	}
}

var server = restify.createServer();
server.get('/hello/:name' , hello_world);

server.listen(8080, function() {
	console.log("Server starting..");
})