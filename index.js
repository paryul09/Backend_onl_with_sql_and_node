const express = require('express');
const mysql = require('mysql');
const moment = require('moment');
//creating a connection
const db = require('./connect');
const dbController = require("./controller/dbController");
const shopController = require("./controller/shopController");

     const app = express()

     //creating a db
     app.get('/createdb',dbController.createDatabase);
     //create a table
     app.get('/createShopTable',dbController.createShopTable);
     //create a shop
     app.post('/shop',shopController.createShop);
     //creating a table for item 2
     app.get('/createInvoiceTable',dbController.createItemsTable);
      //insert itemdetails using api  
      app.post('/invoice',shopController.createInvoice);

     app.listen('3000',()=>{
        console.log('Server started on 3000');
    });