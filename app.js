/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path'),
    ejs = require("ejs"),
    SessionStore = require('session-mongoose')(express),


    store = new SessionStore(

        {

            url: "mongodb://127.0.0.1/np",

            interval: 12000


        }

    ),

    app = express();


// all environments

app.configure(function() {

    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    app.set("public", path.join(__dirname, 'public'));

});

console.log(app.get("public"));

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.cookieParser());
app.use(express.cookieSession({
    secret: 'loadman'
}));
app.use(express.session({
    secret: "loadman",

    store: store,

    cookie: {
        maxAge: 90000
    }

}));
app.use(function(req, res, next) {

    res.locals.user = req.session.user;
    var err = req.session.error;

    delete req.session.error;

    res.locals.message = !err ? "" : "<p> <span class='alert alert-info'>" + err + "</span> </p>";

    next();

});
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

routes(app);


http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});