// const http = require ("http");

// const myServer = http.createServer((req,res)=>{

//     console.log(req);

//     res.end ("Hello From Server !");
// });

// myServer.listen(8000,()=>console.log("Server Started Sucessfully !"));

const http = require ("http");
const fs = require("fs");
const myServer = http.createServer((req,res)=>{
    console.log(req);
    const log = `${Date.now()} : New request received ! \n`;
    fs.appendFile("log.txt",log ,(err,data) =>{

        res.end ("Hello From Server ! ");
    });
        

});

myServer.listen(8000,()=>console.log("Server Started Sucessfully !"));