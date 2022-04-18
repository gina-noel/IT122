import http from 'http';
import { parse } from "querystring"
import * as data from './data.js'


http.createServer((req,res) => {
    let url = req.url.split("?"); // separate route from query string
    let query = parse(url[1]); // convert query string to a JS object
    // var path = req.url.toLowerCase();
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(data.getAll()));
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About page');
            break;
        case '/detail':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            // console.log("1: " + JSON.stringify(data.getItem(query.name)))
            res.end(JSON.stringify(data.getItem(query.name)));
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('The page('+ path +') was not found!');
            break;
    }

}).listen(process.env.PORT || 3000);


