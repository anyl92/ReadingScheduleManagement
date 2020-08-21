var db = require('mysql');
var connection = db.createConnection({
  host : 'localhost',
  user : 'root',
  password : '950902',
  database : 'rsm'
});

connection.connect();

// connection.query('SELECT * FROM rsm.user', function(err, results, fields) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(results);
// });

connection.query('SELECT * FROM rsm.board', function(err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

connection.end();