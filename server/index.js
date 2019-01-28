const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const employees = require('./data/employees.json');

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

app.get('/api/employee', (req, res, next) => {
  console.log('/api/employee');
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.send(JSON.stringify(employees, null, 2));
})


app.post('/api/employee', (req, res, next) => {
  //console.log('/api/employees');
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  console.log(req.body)
  res.send(JSON.stringify(employees,null,2))
  //console.log(next)
  // res.get(a)
  //console.log(req)
  
})
 
app.listen(8080, () => console.log('Job Dispatch API running on port 8080!'))