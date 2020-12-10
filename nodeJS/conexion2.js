const mysql2=require("mysql");
module.exports=mysql2.createConnection({
  host:"localhost",
  port: 3306,
  user:"root",
  password:"",
  database:"climex"
});
