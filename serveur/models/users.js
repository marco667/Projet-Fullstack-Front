const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    years:{
        type: Number,
        required: true
    },
    sexe:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Users', UsersSchema);