var express = require('express');
var router = express.Router();

var db = require('mysql');
const app = require('../app');
var connection = db.createConnection({
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
    let resData = {
      id: res.id,
      nickname: res.nickname,
      title: res.title,
      writer: res.writer,
      link: res.link,
      date: res.date
    }
    console.log(resData)
  });
});

connection.end();

router.get('/index', function(req, res, next) {
  res.send(resData);
  // res.render('/index', {data: 'testData list ejs'});
});

module.exports = router;
