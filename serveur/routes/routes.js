const express = require("express")
const router = express.Router()
const Movies = require("../models/movies")
const Users = require("../models/users")
const Paiements = require("../models/paiements")
const Commandes = require("../models/commandes")
//Accueil
router.get('/',(req,res) => {
    res.send("Bienvenue sur notre site de vente de films");
})
// Afficher la liste des films 
router.get('/movies', async (req,res) => {
    try{
        const movies = await Movies.find()
        res.json(movies)
    }catch(err) {
        res.status(500).json({ message:err.mesage })
    }
})
// Afficher la liste des utilisateurs
router.get('/users', async (req,res) => {
    try{
        const users = await Users.find()
        res.json(users)
    }catch(err) {
        res.status(500).json({ message:err.mesage })
    } 
})

//creation d'un utilisateur 
router.post('/users', async (req,res) => {
    const addUser = new Users ({
        username:req.body.username,
        years:req.body.years,
        sexe:req.body.sexe
    })
    try{
        const newUsers = await addUser.save()
        res.status(201).json(newUsers)
    }catch(err){
        res.status(400).json({ message:err.message })
    }
})

//Ajouter de nouveaux films 
router.post('/movies', async (req,res) => {
    const addMovie = new Movies ({
        title:req.body.title,
        synopsis:req.body.synopsis,
        genre:req.body.genre,
        release_date:req.body.release_date
    })
    try{
        const newMovie = await addMovie.save()
        res.status(201).json(newMovie)
    }catch(err){
        res.status(400).json({ message:err.messsage })
    }
})

module.exports = router