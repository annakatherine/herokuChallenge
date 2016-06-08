//require express
var express = require( 'express' );
//create new express app
var app = express();
var path = require( 'path' );

//creates server
var server = app.listen( 8080, 'localhost', function(){

console.log( 'server listening on port 8080' );

});

//base url
app.get( '/', function (req, res){

console.log( 'hello world from base url get' );
  res.writeHead( 200 );
  res.write( 'we are in base url' );
  res.end();

});

app.get( '/processStuff', function( req, res ){
console.log( 'hello from processStuff' );
res.write( req.query.inputIn );
res.end();

});

app.get( '/testing', function( req, res ){

  res.sendFile( path.resolve( 'public/testing.html'));

});

//another url
app.get( '/test', function( req, res){

console.log(' hello from inside test get' );

});


//have millie explain this again
app.use( express.static ( 'public') );
