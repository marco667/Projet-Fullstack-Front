const mongoose = require("mongoose");
const MoviesSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    synopsis:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    release_date:{
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Movies', MoviesSchema);