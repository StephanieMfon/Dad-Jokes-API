const getRandomDadJokeController = require("./../controllers/dadjokes.controller");

const express = require("express");
const router = express.Router();

// Handle get request for dad-jokes
router.get("/read", getRandomDadJokeController);

module.exports = router;
