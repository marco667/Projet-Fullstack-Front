const mongoose = require("mongoose");
const User = require("../models/users")
const Movie = require("../models/movies")
const commandSchema = new mongoose.Schema({
    userPaie:{
        type: String,
        required: true
    },
    movie:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Commandes', commandSchema);