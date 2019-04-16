const express = require('express');
const router = express.Router();

const pokemon = require('../models/pokemon');

router.get('/', (req, res) => {
res.render('index.ejs', {
        'pokemon': pokemon
 })
 })

router.get('/:id', (req,res) => {
res.render('show.ejs', {
'pokemon': pokemon[req.params.id]
})
}) 









module.exports = router;