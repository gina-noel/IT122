// import http from 'http';
// import { parse } from "querystring"
import * as data from './data.js';
import express from 'express';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
// This has be deprecated: app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.type('text/html');
    res.render('home', { poses: data.getAll()});
})


app.get('/detail', (req,res) => {
    res.type('text/html');
    let result = data.getItem(req.query.name);
    res.render('detail', { poses: req.query.name, result });
});

// send plain text response
app.get('/about', (req,res) => {
    res.type('text/plain');
    res.send('About page');
});

// define 404 handler
app.use((req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
    console.log('Express started');
});

