/**
 * Created by john on 12/17/2015.
 */
var express = require('express');
var router = express.Router();

var auth = require('./auth.js');
var products = require('./properties.js');
var user = require('./user.js');
var beta = require('./beta.js');
var transaction=require('./transaction.js');
var mates=require('./mates.js');
/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);

/*
 * Routes that can be accessed only by autheticated users
 */
//properties
router.get('/api/v1/properties', products.getAll);
router.get('/api/v1/properties/:id', products.getOne);
router.post('/api/v1/properties/', products.create);
router.put('/api/v1/properties/:id', products.update);
router.delete('/api/v1/properties/:id', products.delete);

//users
router.get('/api/v1/user', user.getAll);
router.get('/api/v1/user/:id', user.getOne);
router.get('/api/v1/user/:username', user.getByUserName);
router.post('/register', user.create);
router.put('/api/v1/user/:id', user.update);
router.delete('/api/v1/user/:id', user.delete);
//beta
router.get('/api/v1/beta', beta.getAll);
router.get('/api/v1/beta/getone/:id', beta.getOne);
router.get('/api/v1/beta/getMine', beta.getMine);
router.get('/api/v1/beta/balance', beta.balance);
router.get('/api/v1/beta/total', beta.total);
router.get('/api/v1/beta/myTotal', beta.myTotal);
router.post('/api/v1/beta/', beta.create);
router.put('/api/v1/beta/:id', beta.update);
router.delete('/api/v1/beta/:id', beta.delete);

//bt
router.get('/api/v1/bt', transaction.getAll);
router.get('/api/v1/bt/transaction/:id', transaction.getOne);
router.get('/api/v1/bt/me/transaction', transaction.getMine);
router.get('/api/v1/bt/me/moneyIn', transaction.myTotalIn);
router.get('/api/v1/bt/me/moneyOut', transaction.myTotalOut);
router.post('/api/v1/bt/', transaction.create);
router.put('/api/v1/bt/:id', transaction.update);
router.delete('/api/v1/bt/:id', transaction.delete);

//mates
router.get('/api/v1/mate/me/mates', mates.getUserMates);

/*
 * Routes that can be accessed only by authenticated & authorized users
 */


module.exports = router;