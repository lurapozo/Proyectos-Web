var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Superheroes = require('../models').Superheroes;
const Editorials = require('../models').Editorials;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/superheroes', function(req, res, next) {    	
  Superheroes.findAll()  
  .then(superheroes => {  
      res.json(superheroes);  
  })  
  .catch(error => res.status(400).send(error)) 
});
router.get('/superheroes/:nombre', function(req, res, next) {
  Superheroes.findOne({ where: { nombre: req.params.nombre } })
  .then(superheroes => {  
      res.json( superheroes );  
  })  
  .catch(error => res.status(400).send(error));
});

router.get('/superheroes/editoral/:id', function(req, res, next) {
  Superheroes.findAll({ where: { editorialId: req.params.id } })
  .then(superheroes => {  
      res.json( superheroes );  
  })  
  .catch(error => res.status(400).send(error));
});


router.get('/editorials', function(req, res, next) {    	
  Editorials.findAll()  
  .then(editorials => {  
      res.json(editorials);  
  })  
  .catch(error => res.status(400).send(error)) 
});
router.get('/editorials/:id', function(req, res, next) {
  Editorials.findOne({ where: { id: req.params.id } })
  .then(editorials => {  
      res.json( editorials );  
  })  
  .catch(error => res.status(400).send(error));
});
module.exports = router;
