const express = require('express');
const router = express.Router();

const homeController = require('./controllers/home');
const gameController = require('./controllers/game');
const loginController = require('./controllers/login');
const usersController = require('./controllers/users');
const createdataController = require('./controllers/createdata')
const showdashboardController = require('./controllers/dashboard')
const updatedataController = require('./controllers/updatedata')
const deletedataUser = require('./controllers/deletedata')


//router//
router.get('/', homeController.home);
router.get('/login', loginController.loginGet);
router.post('/login', loginController.loginPost);
router.get('/users', usersController.users);
router.get('/users/:id', usersController.usersById);
router.get('/home', homeController.home);
router.get('/game', gameController.game);
router.get('/createdata', createdataController.createdataUserDisplay);
router.post('/createdata', createdataController.createdataUser);
router.get('/dashboard', showdashboardController.showDashboard);
router.get('/updatedata/:id', updatedataController.updatedataUserDisplay);
router.post('/updatedata/:id', updatedataController.updatedataUser);
router.get('/delete/:id', deletedataUser.deletedataUser);




//module//
module.exports = router;