// Table Role {
//     _id ObjectId
//     name String
//     scopes Array(String)
//     created DateTime
//     updated DateTime
//   }

const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    scopes: [
        {
            type: String,
            trim: true
        }
    ],
    created: {type: Date, default: Date.now()},
    updated: {type: Date, default: null}
});


module.exports = mongoose.model('role', roleSchema)