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
    console.log("SUCCESS: connected");
    clearInterval(initInterval)
  });
}, 2000)


var express = require("express");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/employees', (req, res) => {
  connection.query('SELECT * FROM EMPLOYEE', (err, result) => {
    if (err) console.log(err)
    return res.json(result)
  })
})

app.post('/add-employee/emp', (req, res) => {
  const { name, code, profession, color, city, branch, assigned } = req.body
  const query = `INSERT INTO EMPLOYEE (name, code, profession, color, city, branch, assigned ) VALUES ( '${name}', '${code}', '${profession}', '${color}', '${city}', '${branch}', '${assigned}' )`
  connection.query(query, (err, result) => {
    console.log(err)
    return res.redirect('/employees')
  })
})


app.post('/edit-employee/emp', (req, res) => {
  const { id, name, code, profession, color, city, branch, assigned } = req.body
  const query = `UPDATE EMPLOYEE SET name='${name}', code='${code}', profession='${profession}', color='${color}', city='${city}', branch='${branch}', assigned='${assigned}' where id=${id}`
  connection.query(query, (err, result) => {
    if (err) console.log(err)
    return res.redirect('/employees')
  })
})

app.post('/remove-employee/emp', (req, res) => {
  const { id } = req.body
  const query = `DELETE FROM EMPLOYEE WHERE id=${id}`
  connection.query(query, (err, result) => {
    if (err) console.log(err)
    return res.redirect('/employees')
  })
})

app.listen(8080, () => console.log('Job Dispatch API running on port 8080!'));