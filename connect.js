const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost', // host for connection
    database:'nodemysql',  // database from which we want to connect out node application
    user: 'root', // username of the mysql connection
    password: '' // password of the mysql connection
    });
    db.connect((err) =>{
        if(err){
            console.log('failed connection')
        }else{
        console.log("connection created with Mysql successfully");
        }
     });

     module.exports = db;