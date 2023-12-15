///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// pull PORT from .env, give default value of 4000
const mongoose = require('mongoose');
const {DATABASE_URI} = process.env
// const {API_URL} = process.env


///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.set('strictQuery', true);
mongoose.connect(DATABASE_URI)
// mongoose.connect(API_URL)
// const fetch = require('node-fetch');


// Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error));



  

// Make a GET request
// fetch('http://www.omdbapi.com/?apikey=cc0df2f8&s=search_query', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));