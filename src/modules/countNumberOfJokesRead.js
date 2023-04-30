/*
A script that tracks total number of jokes requested from the API

This script stores our data in the stats.json file and updates it on every request
*/
const fs = require("fs");
const FILE_PATH = `${__dirname}/../dev-data/stats.json`;

// Read data stats from stats.json file
let readFromFile = () => {
  let result = [{}];
  try {
    result = JSON.parse(fs.readFileSync(FILE_PATH), "utf-8");
  } catch (err) {
    console.log(err.stack);
  }
  return result;
};

// Write current data stats to stats.json file
let writeToFile = (stats) => {
  try {
    fs.writeFile(FILE_PATH, JSON.stringify(stats), (err) => {
      console.log("written to file");
    });
  } catch (err) {
    console.log(err.stack);
  }
};

// Export data stats middleware
const countNumberOfJokesRead = (req, res, next) => {
  res.on("finish", () => {
    const stats = readFromFile()[0];
    const event = req.method;
    stats[event] = stats[event] ? stats[event] + 1 : 1;
    writeToFile([stats]);
  });
  next();
};

module.exports = countNumberOfJokesRead;
