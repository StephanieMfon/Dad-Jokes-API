const getRandomDadJokeController = require("./../controllers/dadjokes.controller");

const express = require("express");
const router = express.Router();

// Handle get request for dad-jokes
router.get("/dad-jokes", getRandomDadJokeController);

module.exports = router;
