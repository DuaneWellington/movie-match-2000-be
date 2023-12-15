// ./routes/movies.js

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

///////////////////////////////
// ROUTES
////////////////////////////////

// MOVIES INDEX ROUTE
router.get("/", async (req, res) => {
	res.status(200).json({message: "movies index route"})
});

// MOVIES CREATE ROUTE
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "movies create route"})
});

module.exports = router