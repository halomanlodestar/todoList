const mysql = require(`mysql2`);

const cn = mysql.createConnection({
    host: `localhost`,
    user: `root`,
    password: `admin`
})

cn.query(`show databases`,(err, out) => {
            if(err) throw err;
            console.log(out);
        })