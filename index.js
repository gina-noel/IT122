import * as data from './data.js';
import express from 'express';
import { Poses } from "./models/Poses.js";


const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs");


app.get('/', (req, res, next) => {
    Poses.find({}).lean()
        .then((poses) => {
            // respond to browser only after db query completes
            res.render('home', {poses});
        })
        .catch(err => next(err))
});

app.get('/detail', (req,res,next) => {
        // db query can use request parameters
    Poses.findOne({ name: req.query.name }).lean()
        .then((pose) => {
            res.render('detail', {result: pose} );
        })
        .catch(err => next(err));
});

app.get('/delete', (req,res,next) => {
    // var poseName = Poses.findOne({ name: req.query.name }).lean()
    let poseName = req.query.name
    Poses.deleteOne({ name: req.query.name }).lean()
        .then(() => {
            res.render("delete", {poseName});
        })
        .catch(err => next(err));
});


// app.get('/', (req, res) => {
//     res.type('text/html');
//     res.render('home', { poses: data.getAll()});
// })
//
// app.get('/detail', (req,res) => {
//     res.type('text/html');
//     let result = data.getItem(req.query.name);
//     res.render('detail', { poses: req.query.name, result });
// });

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

