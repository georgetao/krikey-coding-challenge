
// Inital declarations.
var restify = require('restify');
// var err = require('restify-errors');

// Greetings function
function hello_world(req, res, next) {
	if (req.params.name == "") {
		res.send(400);

		//ALTERNATIVELY
		//res.send(new err.BadRequestError('No name provided'));
	}
	else {
		res.json("Hello " + req.params.name + "!");
	}
}

// Server stuff
var server = restify.createServer();
server.get('/:name' , hello_world);

server.listen(8080, function() {
	console.log("Server starting..");
})