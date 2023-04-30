const getRandomDadJoke = require("./../modules/getRandomDadJoke");
const number = require(`${__dirname}/../dev-data/stats.json`);

const getRandomDadJokeController = async (req, res) => {
  let jokesRead = number[0].GET;
  console.log(jokesRead);
  res.status(200).json({
    status: "success",
    total_jokes_read: jokesRead + 1,
    random_joke: await getRandomDadJoke(),
  });
};

module.exports = getRandomDadJokeController;
