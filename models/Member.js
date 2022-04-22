const mongoose = require('mongoose');

const MemberSchema = mongoose.Schema({
    rname: {
        type: String,
        required: true
    },
    mname: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Member', MemberSchema);