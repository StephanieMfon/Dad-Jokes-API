/*
A script to request random dad jokes from dad-jokes.p.rapidapi.com 

This script uses axios to get data from the API
*/
const axios = require("axios");

const options = {
  method: "GET",
  url: "https://dad-jokes.p.rapidapi.com/random/joke",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "19d4c0b500mshb10ed6d812ad4b1p1ef0ffjsn2aa843132a1b",
    "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
  },
};

const getRandomDadJoke = async () => {
  try {
    const response = await axios.request(options);
    return `RANDOM DAD JOKE  ${response.data.body[[0]].setup}, ${
      response.data.body[[0]].punchline
    }`;
  } catch (error) {
    console.error(error);
  }
};
module.exports = getRandomDadJoke;
