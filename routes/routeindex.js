const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');


router.get('/home', homeController.home);
router.get('/apps', homeController.app);
router.get('/trash', homeController.trash);

console.log("route index loaded");
module.exports = router;