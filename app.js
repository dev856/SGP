const express = require("express"); 
const path = require('path');
const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config({path: './.env'});
const app = express();
const db = mysql.createConnection({ 
  host:process.env.HOST_DATABASE,
  user:process.env.USER_DATABASE,
  password:process.env.PASS_DATABASE,
  database:process.env.DATABASE
});

const publicdirect = path.join(__dirname,'./public');
app.use(express.static(publicdirect));

app.use(express.urlencoded({extended: false}));
 
app.use(express.json());
app.use(express.static('views'));
app.set('view engine', 'hbs');

db.connect((error)=>{
  if(error)
  {
    console.log(error)
  }
  else
  {
    console.log("mysql connected")
  }
})

app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));

app.listen(5000,()=>{
  console.log("server started")
})
