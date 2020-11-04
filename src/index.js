const express = require('express');
const cors = require('cors');
const app = require ();
const bodyParser = require(bodyParser);

const Router = require('./routers/class')

app.use('/api/class',Router)

//listen
const PORT = env.API_PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else { 
    console.log(`API running at ` + PORT );
  }
})

