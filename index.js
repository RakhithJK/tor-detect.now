var express          = require('express');
var bodyParser       = require('body-parser');
var fs               = require('fs');
var path             = require('path')
var cookieSession    = require('cookie-session')
var torDetect        = require('tor-detect');
var validator        = require('validator');
var sanitizer        = require('express-sanitizer');
var helmet           = require('helmet');
var dotenv           = require('dotenv')
var app              = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));
app.disable('x-powered-by')
app.use(sanitizer())
app.use(helmet());
dotenv.load();
app.use(cookieSession({
    secret: process.env.SECRET,
    cookie: {
        maxAge:60000,
        httpOnly: true,
        secure: true
    }
}));

app.get('/', function(req, res, next) {
    var ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    torDetect(ipAddress).then(tor => {
        if (tor) {
            status = '<img src="images/onion_green.svg"><br/>It appears that you <span id="success">are</span> using Tor!';
        } else {
            status = '<img src="images/onion_red.svg"><br/>It appears that you <span id="fail">are not</span> using Tor!';
        }

        fs.readFile(__dirname + '/index.html', function(err, data) {
            if (err) {
                throw err;
            }

            var html = data.toString();
            var html = html.replace(/{{STATUS}}/g, status);

            res.send(html);
        });
    }).catch(next);
});

app.use(function (err, req, res, next) {
    console.log(err)
    res.status(500).send('Something broke!')
});

const port = process.env.PORT || 3000;
app.listen(port);