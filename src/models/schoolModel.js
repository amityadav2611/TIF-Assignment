// Table School as S {
//     _id ObjectId
//     name String
//     city String
//     state String
//     country String
//     created DateTime
//     updated DateTime
//   }

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    created: {type: Date, default: Date.now()},
    updated: {type: Date, default: null}
});


module.exports = mongoose.model('school', schoolSchema)