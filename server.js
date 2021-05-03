const express = require("express");
const PORT = process.env.PORT || 3001;
const mysql = require("mysql2");
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "6812775Nm*",
        database: "election"
    },
    console.log("Connected to the election database.")
);
const app = express();
app.use(express.urlencoded({exteneded: false}));
app.use(express.json());
db.query("SELECT * FROM candidates", (err, rows) => {
    console.log(rows);
});
app.use((req, res) => {
    res.status(404).end();
})
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})