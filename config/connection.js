//adding in dependencies

var mysql = require("mysql");

//establishing connection to database

var connecting = mysql.createConnection ({

    port: 3000,
    host: "localhost",
    user: root,
    password: "",
    database: "burgers_db"
});

//connect to mySQL

connecting.connect(function(err) {

    if (err) {

        console.log("SQL CONNECTION ERROR");

    }

    else {

        console.log("Connected!");
    }
});

//export

module.exports = connect;