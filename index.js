// Requiring the express module, and storing the function it
// returns in a variable called express
var express = require("express");

// Calling the express funciton, and storing the object it returns
// in the app variable
var app = express();

// Calling the get method of the app object, and passing in
// two arguemnts (a string, and a callback function). The callback
// function takes in two parametres (req and res). We can't tell what
// type these properties are yet, but from the API we can see that
// they are http.ClientRequest and http.ServerResponse objects.
// This callback function gets called when a get request comes in
// Only listens to GET requests.
app.get("/", function(req, res){
  // Creating a new object, with one property
  var myObject = {
    msg : "Hello from Node (JSON)"
  };

  // Changing the response content type in the response header
  res.type('application/json');

  // Calling the send method of the http.ServerResponse object
  // Converting myObject to a JSON string and sending the result
  // as an argument to the send method.
  res.send(JSON.stringify(myObject));
});

app.get("/index.html", function(req, res){
  // Trying to trick the browser into thinking my response
  // content is a png - currently not working, still getting
  // parsed as HTML
  res.type('png');

  // Sending a string of HTML in the body of the response
  res.send("<html><body><h1>Hello World</h1></body></html>");
});

// Setting up the server to listen for requests on port 3000 (or any
// number below 1000 as these are reserved). Passing in two arguments
// (port number and callback funciton). The callback function gets called
// once the listener has been setup.
app.listen(3000, function(){
  console.log("My App is now listening on port 3000!")
});
