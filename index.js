import * as data from './data.js';
import express from 'express';
import { Poses } from "./models/Poses.js";
import cors from 'cors';


const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', cors()); // set Access-Control-Allow-Origin header for api route

app.set("view engine", "ejs");

// uses api
app.get('/api/poses', (req,res, next) => {
    Poses.find({}).lean()
        .then((poses) => {
            if (poses) {
                res.json(poses);
            } else {
                return res.status(500).send('Database Error occurred');
            }
        })
});

// uses api
app.get('/api/detail/:name', (req, res, next) => {
    Poses.findOne({ name: req.params.name })
        .then((pose) => {
            console.log(pose);
            if (pose !== null) {
                res.json(pose);
            } else {
                return res.status(400).send(req.params.name + ' not found');
            }
        })
        .catch(err => next(err))
});
//uses api
app.delete('/api/delete/:name', (req, res, next) => {
    Poses.deleteOne({ name: req.params.name })
        .then((pose) => {
            console.log(pose + "delete");
            if (pose !== null) {
                res.json(pose);
            } else {
                return res.status(400).send(req.params.name + ' not found');
            }
        })
        .catch(err => next(err))
});

// // api
// app.post('/api/add', (req, res) => {
//     Poses.findOne({"name": req.body.name}).lean()
//         .then((pose) => {
//             if(pose === null) {
//                 Poses.create({
//                         "name":req.body.name,
//                         "benefit": req.body.benefit,
//                         "ability": req.body.ability,
//                         "symbol": req.body.symbol
//                     });
//                 res.json({"message": "Pose added."});
//             } else {
//                 res.status(500).send("Pose already exists.");
//             }})
// });

// app.post('/api/add/', (req,res, next) => {
//     // find & update existing item, or add new
//     if (!req.body._id) { // insert new document
//         let pose = new Poses(req.body);
//         pose.save((err,newPose) => {
//             if (err) return next(err);
//             res.json({updated: 0, _id: newPose._id});
//         });
//     } else { // update existing document
//         Poses.updateOne({ _id: req.body._id}, {name:req.body.name, benefit: req.body.benefit, ability: req.body.ability, symbol: req.body.symbol }, (err, result) => {
//             if (err) return next(err);
//             res.json({updated: result.nModified, _id: req.body._id});
//         });
//     }
// });


app.post('/api/add1', (req, res, next) => {
    const newPose = {'name':'Chair', 'benefit':'Stability', 'ability': 'Easy', 'symbol':'Grounding' }
    Poses.create(newPose)
        .then((pose) => {
            if (pose !== null) {
                res.json(pose);
            } else {
                return res.status(400).send(req.params.name + ' not found');
            }
        })
        .catch(err => next(err))
});

app.post('/api/add2', (req, res, next) => {
    const newPose = new Poses({
                        "name":req.body.name,
                        "benefit": req.body.benefit,
                        "ability": req.body.ability,
                        "symbol": req.body.symbol

    })
    Poses.create(newPose)
        .then((pose) => {
            if (pose !== null) {
                res.json(pose);
            } else {
                return res.status(400).send(req.params.name + ' not found');
            }
        })
        .catch(err => next(err))
});








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
    let poseName = req.query.name
    Poses.deleteOne({ name: req.query.name }).lean()
        .then(() => {
            res.send(req.query.name + " has been deleted");
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

