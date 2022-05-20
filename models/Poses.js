import mongoose from 'mongoose';
import { connectionString } from '../credentials.js';

const { Schema } = mongoose;

mongoose.connect(connectionString, {
    dbName: 'yogaproject',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
    console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const posesSchema = new Schema({
//     title: { type: String, required: true },
    name: String,
    benefit: String,
    ability: String,
    symbol: String
});

export const Poses = mongoose.model('Poses', posesSchema);
