# Node+MySQL+Webpack

Sample that shows how to use [webpack](https://webpack.js.org/) for backend app. This example uses [MySQL](https://www.mysql.com/) for illustartion purposes, but the logic is the same for any backend app.

I will assume you have [node](https://nodejs.org/en/) installed.

All it does is transpile the below :point_down: code snippet that uses some [es6](http://es6-features.org/#Constants) features using [babel](https://babeljs.io/), and package it all with [webpack](https://webpack.js.org/).

```javascript
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
```

#### Clone Repo
```
git clone https://github.com/clovisphere/webpack-backend-example.git && cd webpack-backend-example
```

#### Prerequisite
```
nvm install
nvm use
npm install
```

#### Build
```
npm run build
```

#### Run
```
make run
```

Enjoy :sunglasses: :v: :fire:
