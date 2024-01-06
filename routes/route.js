const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller");

// weapons, hit points, coins, gear, shipweapons

router.get("/weapons", controller.getWeapons);

module.exports = router;
