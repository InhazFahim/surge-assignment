const express = require("express");
const app = express();
const mysql = require('mysql');
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "assignment"
})

app.get("/", (req,res) =>{
    const sqlInsert = "INSERT INTO "
    db.query()
    res.send("hello Inhaz");
});

app.listen(3001, () => {
    console.log("running on port 3001");
})