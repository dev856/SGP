const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({ 
    host:process.env.HOST_DATABASE,
    user:process.env.USER_DATABASE,
    password:process.env.PASS_DATABASE,
    database:process.env.DATABASE
  });
exports.dashboard1 = (req, res) => {
    console.log(req.body);

    const { email , password , passwordconfirm } = req.body; 

    db.query('SELECT email FROM user WHERE email = ?', [email],async(error,results)=> {
        if(error){
            console.log(error);
        }
        if(results.length > 0){
            return res.render('dashboard1',{
                message: 'that email is already in use'
            })
        }
        else if( password !== passwordconfirm ){
            return res.render('dashboard1',{
                message: 'passwords do not match'
            });
        }
        let hashedpass = await bcrypt.hash(password, 8);
        console.log(hashedpass);
        
        res.send("test");

    } );
   
}