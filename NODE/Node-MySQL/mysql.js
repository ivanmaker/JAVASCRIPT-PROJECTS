let mysql = require('mysql2');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "the wind that shakes the barley",
    database: "world"
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Connected to world');
    let sqlTable = "INSERT INTO movieFilms (name, genre, format) VALUES ('Cowboy Bebop', 'SciFi', 'Anime');";
    con.query(sqlTable, function (err, result) {
        if (err) throw err;
        console.log('Table Created!' + result.affectedRows);
    });
})