const mongoose = require("mongoose");
const User = require("../models/users")
const Movie = require("../models/movies")
const paiementSchema = new mongoose.Schema({
    userPaie:{
        type: String,
        required: true
    },
    movie:{
        type: String,
        required: true
    },
    montant:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Paiements', paiementSchema);