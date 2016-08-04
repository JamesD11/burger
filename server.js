var express 	= require('express');
var bodyParser 	= require('body-parser');
var method      = require('method-override');


var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
var app = express();
app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({
	extended: false
}));
//app.use(MethodOverride('_method'));
var hb = require('express-handlebars');
app.engine('handlebars', hb({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

//app.use('/', routes);
//app.use('/update', routes);
//app.use('/create', routes);

var port = 3000;
app.listen(port);

console.log(module.exports);
