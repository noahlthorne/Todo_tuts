const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();
app.listen(3000, () => {
 console.log("Server started on port 3000")
})

mongoose.connect("mongodb://localhost:27017/todoapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('open', () => {
    console.log('Connected to mongoDB');
});
db.on('error', (error) => {
    console.log(error)
})