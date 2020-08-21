const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', (req, res)=> res.send({username:'yu'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})