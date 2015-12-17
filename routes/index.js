/**
 * Created by john on 12/17/2015.
 */
var express = require('express');
var router = express.Router();

var auth = require('./auth.js');
var products = require('./properties.js');
var user = require('./user.js');

/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);

/*
 * Routes that can be accessed only by autheticated users
 */
router.get('/api/v1/properties', products.getAll);
router.get('/api/v1/properties/:id', products.getOne);
router.post('/api/v1/properties/', products.create);
router.put('/api/v1/properties/:id', products.update);
router.delete('/api/v1/properties/:id', products.delete);

/*
 * Routes that can be accessed only by authenticated & authorized users
 */


module.exports = router;