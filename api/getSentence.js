const axios = require("axios");

const getSentence = async () => {
  const jokeData = await axios.get("https://zenquotes.io/api/random");
  console.log(jokeData.data[0].q.split(" "));

  return jokeData.data[0].q.split(" ");
};

module.exports = getSentence;
