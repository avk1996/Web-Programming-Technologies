//step 1 is at app.js
//step 2 is at router.js
//step 3 establish db with mysql

//load mysql library
const mySql = require("mysql");
 let mySqlConnMain = mySql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',    
    port:3306,
    database: 'test'
 }) 


 mySqlConnMain.connect((error)=>{
    if(error){
        console.log(`Error occured: ${error}`);
    }
    else{
        console.log("Apka MySql kismat connection ho gaya hai")
    }
 })

 module.exports=mySqlConnMain;

