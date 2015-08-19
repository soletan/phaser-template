var express = require( "express" );
var app = express();

app.use( express.static( "game" ) );
app.use( express.static( "bower_components" ) );

app.listen( 9000 );