import * as mysql from 'mysql2' 

let data = () => {
    const con = mysql.createConnection({
        // update accordingly
        host: 'localhost',
        user: 'root',
        password: '',
        database: ''
    });

    // simple query
    return con.query('SELECT 1+1 as result', (err, rows) => {
        // close connection
        con.end();
        if (err) throw err;
        rows.forEach((row) => {
            console.log(row['result']);
        });
    });
};

data();



