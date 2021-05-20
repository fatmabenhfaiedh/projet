const express = require('express');

const app = express();

app.get('/', (req, res) => res.send("API running"));

app.listen(5000, (err)=>{
err
  ? console.log("server error!")
  : console.log("server is running on port 5000");

});
