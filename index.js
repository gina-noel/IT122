import http from 'http';
import { parse } from "querystring"
import * as data from './data.js'


http.createServer((req,res) => {
    var path = req.url.toLowerCase();
    let url = req.url.split("?"); // separate route from query string
    let query = parse(url[1]); // convert query string to a JS object
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
            // res.end(JSON.stringify(data.getItem(query)));
            res.end(JSON.stringify(data.getItem(query.name)));
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('The page('+ path +') was not found!');
            break;
    }

}).listen(process.env.PORT || 3000);


