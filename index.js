/*Routes JS
  Frederick Charles Hesse Corrêa Garcia 
  Student #: 301150756 */
  
var express = require('express');
const { getMaxListeners } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'About Me', menuId:'about'});
});

router.get('/services', function(req, res, next) {
  res.render('services', {page:'Services', menuId:'services'});
});

router.get('/projects', function(req, res, next) {
  res.render('projects', {page:'Projects', menuId:'projects'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact', menuId:'contact'});
});

