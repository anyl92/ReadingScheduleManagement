const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

const db = require('mysql');
let resData = [];

const connection = db.createConnection({
  host : 'localhost',
  user : 'root',
  password : '950902',
  database : 'rsm'
});
connection.connect();

connection.query('SELECT * FROM rsm.board', function(err, results, fields) {
  if (err) {
    console.log(err);
  }
  results.forEach(res => {
    let resDataObj = {
      id: res.id,
      nickname: res.nickname,
      title: res.title,
      writer: res.writer,
      link: res.link,
      date: res.date
    }
    resData.push(resDataObj);
  });
});

connection.end();

app.use(cors());
app.get('/getdata', function(req, res) {
  // res.header('Access-Control-Allow-Origin', '*');
  res.send(resData);
});

app.listen(port, function() {
  console.log('Server Running at port -', port)
})
