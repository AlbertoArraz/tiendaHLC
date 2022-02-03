const cors       = require('cors')
const express    = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get    ("/armas",      cors(), controller.readArmas);   // Read All
router.get    ("/armas/:id",  cors(), controller.readArma);    // Read
router.delete ("/armas/:id",  cors(), controller.deleteArma);  // Delete
router.put    ("/armas/:id",  cors(), controller.updateArma);  // Update
router.post   ("/armas",      cors(), controller.createArma);  // Create

router.get    ("/municiones",     cors(), controller.readMuniciones);  // Read All
router.get    ("/municiones/:id", cors(), controller.readMunicion);   // Read
router.delete ("/municiones/:id", cors(), controller.deleteMunicion); // Delete
router.put    ("/municiones/:id", cors(), controller.updateMunicion); // Update
router.post   ("/municiones",     cors(), controller.createMunicion); // Create


module.exports = router;
