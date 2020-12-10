const mysql=require("mysql");
module.exports=mysql.createConnection({
  host:"25.73.152.124",
    port: 3306,
    user:"sebas",
    password:"",
    database:"climex"
});

