///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();

require('./config/db.connection.js')


// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;

// import express
const express = require("express");

// create application object
const apiRouter = require('./routes/api.jsx');
const app = express();

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});
app.use('/api', apiRouter);

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));



// server.js
// Middleware and configuration can be added here
// Mount the API routes
// Start the server
// const PORT = process.env.PORT || 3001;});