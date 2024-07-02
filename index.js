require('dotenv').config({ path: './.env' });

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

const sessionMiddleware = session({ 
    secret: process.env.SessionSecret,
    resave: true,
    saveUninitialized: true,
});
app.use(sessionMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('trust proxy', true)


const loadRoutes = require('./functions/loadRoutes');
loadRoutes(app);

app.get("*", (req, res) => {
    res.render('404');
});

app.listen(process.env.WEBport, () => {
    console.log(`WebServer start on ${process.env.WEBport}`)
});
