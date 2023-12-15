// routes/api.js

const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();
// const MOVIE_ID = 'tt3896198';

router.get('/movie', async (req, res) => {
  try {

    const { searchTerm } = req.body;
    if (!searchTerm) {
        return res.status(400).json({ error: 'Missing movie ID in query parameters'});
    }
    
    const apiKey = process.env.OMDB_API_KEY;
    const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${OMDB_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching movie data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;