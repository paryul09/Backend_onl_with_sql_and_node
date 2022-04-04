const db = require("../connect");
const moment = require("moment");
const createShop = (req, res) => {
  // res.writeHead(200,{"content-type":"text/html"});
  let name = req.query.name;
  let address = req.query.address;
  let email = req.query.email;
  let cn = req.query.cn;
  let sql = "INSERT INTO shopdetails(name,address,email,cn)VALUES(?,?,?,?)";
  db.query(sql, [name, address, email, cn], (err, response) => {
    if (err) {
      console.log(err);
      console.log("error while inserting values");
      res.send(err.sqlMessage);
    } else {
      console.log("values inserted");
      res.send("values inserted");
    }
  });
};

const createInvoice = (req, res) => {
  // res.writeHead(200,{"content-type":"text/html"});
  let bname = req.query.bname;
  let bcn = req.query.bcn;
  let itemname = req.query.itemname;
  let quantity = req.query.quantity;
  let ppquantity = req.query.ppquantity;
  let discount = req.query.discount;
  //assuming gst to be 18% quantity*ppquantity*0.18;
  //we are taking percentage gst as an input on a front end using this
  //percentage value we can print a invoice as per the percentage
  let gst = req.query.gst;
  var mysqlTimestamp = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
  let paid = req.query.paid;

  let sql =
    "INSERT INTO itemdetails(bname,bcn,itemname,quantity,ppquantity,discount,gst,mysqlTimestamp,paid)VALUES(?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      bname,
      bcn,
      itemname,
      quantity,
      ppquantity,
      discount,
      gst,
      mysqlTimestamp,
      paid,
    ],
    (err, response) => {
      if (err) {
        res.send(err.sqlMessage);
        console.log("error while inserting values");
      } else {
        console.log("values inserted");
        res.send("values inserted");
      }
    }
  );
};

module.exports = { createInvoice, createShop };
