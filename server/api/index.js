var mysql = require("mysql");

let connection

const initInterval = setInterval(() => {

  connection = mysql.createConnection({
    host: process.env.DATABASE_HOST || '127.0.0.1',
    user: 'root',
    password: '123',
    database: 'PLEXXIS',
    port: 3306
  });

  connection.connect(function (err) {

    if (err) {
        console.error("error connecting ");
        return null;
    }
    console.log("SUCCESS: connected as id " + this.threadId);

    clearInterval(initInterval)
  
  });

}, 2000)


var express = require("express");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/employees', (req, res) => {
  connection.query('SELECT * FROM EMPLOYEE', (err, result) => {
    res.json(result)
  });
})

app.get('/armin', (req, res) => {
  const query = "INSERT INTO EMPLOYEE VALUES (2,'ARMIN', '199', 'programmer','white','toronto','t','Y')"
  connection.query(query, (err, result) => {
    res.json(result)
  });
})

app.listen(8080, () => console.log('Job Dispatch API running on port 8080!'));