// controllers/movieController.js

const axios = require('axios');
const OMDB_API_KEY = 'cc0df2f8';
const MOVIE_ID = 'tt3896198';
const getMovieData = async (req, res) => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?i=${MOVIE_ID}&apikey=${OMDB_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching movie data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = {
  getMovieData,
};