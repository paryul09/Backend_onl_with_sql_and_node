    const db = require("../connect");
    
    const createDatabase =  (req,res)=>{
        let sql = "CREATE DATABASE nodemysql";
        db.query(sql,(err)=>{
            if(err){
                throw err;
               //  res.send('error occured');
               // console.log('error occured');
            }else{
            console.log('db created');
            res.send('Database Created');
            }
        });
    };

    const createShopTable = (req,res)=>{
        let sql = 'CREATE TABLE shopdetails(name VARCHAR(255),address VARCHAR(255),email VARCHAR(255),cn VARCHAR(255), PRIMARY KEY(cn))'
        db.query(sql,err=>{
            if(err){
                throw err;
               //  console.log("error while creating table");
            }else{
                res.send('table created');
            }
        });
    }

    const createItemsTable = (req,res)=>{
        let sql = 'CREATE TABLE itemdetails(bname VARCHAR(255),bcn VARCHAR(255),itemname VARCHAR(255),quantity VARCHAR(255),ppquantity VARCHAR(255),discount VARCHAR(255),gst VARCHAR(255),mysqlTimestamp VARCHAR(255),paid BOOLEAN, PRIMARY KEY(bcn))'
        db.query(sql,err=>{
            if(err){
                res.send(err.sqlMessage);
                console.log("error in creating table");
            }else{
                res.send('table2 created');
            }
        });
    };




    module.exports = {
        createDatabase, createShopTable, createItemsTable
    }