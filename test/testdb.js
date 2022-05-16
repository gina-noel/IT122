import { Poses } from "../models/Poses.js";

// return all records
Poses.find({}).lean()
    .then((poses) => {
        console.log(poses);
    })
    .catch(err => next(err));

