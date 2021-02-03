
// To run this .first install follwing 
/*
npm install express
npm install body-parser

*/
const express=require("express");
const app=express();
app.use(express.static('Dashboard'));// epxress static is used to serve css js files
app.use(express.static('Login'));


app.post('/dashboard.html',(req,res)=>{
    res.send('form submitted...this does not check just proceed to admin page..');
        });
    app.get('/',(req,res)=>{
res.sendFile(__dirname + '/login/login.html');
    });
app.listen(3000);