const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/login', (req, res) => res.render("login", {register:'login'}))
route.get('/register', (req, res) => res.render("login", {register:'register'}))
route.get('/blog', (req, res) => res.render("blog"))
route.get('/categorias', (req, res) => res.render("categories"))
route.get('/temporada', (req, res) => res.render("blog-details"))

module.exports = route