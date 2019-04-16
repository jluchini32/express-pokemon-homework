const express = require('express');
const router = express.Router();

const pokemon = require('../models/pokemon');

router.get('/', (req, res) => {
res.render('index.ejs', {
        'pokemon': pokemon
 })
 })

router.get('/new', (req, res) =>{
res.render('new.ejs')
})

router.post('/', (req, res) =>{
pokemon.push(req.body)
res.redirect('/pokemon');
})

router.get('/:id', (req,res) => {
res.render('show.ejs', {
'pokemon': pokemon[req.params.id]
})
}) 

router.delete('/:id', (req, res)=>{
pokemon.splice(req.params.id, 1);

res.redirect('/pokemon');
})

router.get('/:id/edit', (req, res) => {
res.render('edit.ejs', {
    'pokemon': pokemon[req.params.id],
    id: req.params.id
})
})

router.put('/:id', (req, res) => {
    pokemon[req.params.id] = req.body;
    res.redirect('/pokemon');
})







module.exports = router;