const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    rname:{
        type: String,
        unique: true,
        required: true
    },
    rcode: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Room', RoomSchema);