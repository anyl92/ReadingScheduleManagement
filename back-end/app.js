const express = require('express');
const cors = require('cors');
const port = 8000;

const app = express();

app.use(cors());
app.use(express.json());

const db = require('mysql');
let resData = [];

const conn = db.createConnection({
  host : 'localhost',
  user : 'root',
  password : '950902',
  database : 'rsm'
});
conn.connect();

app.get('/getdata', function(req, res) {
  resData = [];
  conn.query('SELECT * FROM rsm.board', function(err, results) {
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
    res.send(resData);
  });
});

app.post('/writedata', function(req, res) {
  console.log(req.body);
  // console.log(resData.length, '길이')
  const id = req.body.id;
  const nickname = req.body.nickname;
  const title = req.body.title;
  const writer = req.body.writer;
  const link = req.body.link;
  const date = req.body.date;

  let sql = "INSERT INTO rsm.board VALUES (?, ?, ?, ?, ?, ?)";
  conn.query(sql, [id, nickname, title, writer, link, date], function(err) {
    if (err) {console.log(err)}
    else {res.send()}
  })
})

app.listen(port, function() {
  console.log('Server Running at port -', port)
})
