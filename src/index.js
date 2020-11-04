const express = require('express');
const cors = require('cors');
const app = require ();
const bodyParser = require(bodyParser);

app.use(bodyParser.json())

const Router = require('./routers/class')
app.use('/api/class',Router)

const log = (req, res, next) => {
  console.log('==========================')
  console.log('req.originalUrl\t', req.originalUrl);
  console.log('req.query\t', req.query);
  console.log('req.params\t', req.params);
  console.log('req.body\t', req.body); // chi post moi co 
  next();
}
app.use(log);

//listen
const PORT = env.API_PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else { 
    console.log(`API running at ` + PORT );
  }
})

