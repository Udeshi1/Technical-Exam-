const express = require('express')
var mongoose = require('mongoose');
const mongo_url = process.env.MONGO_URL || "localhost"

const app = express()
const port = 3000


 mongoose.connect('mongodb://${mongo_url}:27017/testDb');

 var db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function callback () {
   console.log("h");
 });


app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})