// Link Activity

let joinType = `log`;

document.getElementById(`switch`).onclick = () => {
    if (joinType == `log`) {
        joinType = `sign`;
        console.log(joinType);
    }
    else if (joinType == `sign`) {
        joinType = `log`;
        console.log(joinType);
    }
};

// Data Bases Management 

const mysql = require(`mysql2`);

const cn = mysql.createConnection({
    host: `localhost`,
    user: `root`,
    password: `admin`,
    database: `web`
})

document.querySelector(`#testBtn`).onclick = () => {
    cn.query(`show tables`,(err, out) => {
        if(err) throw err;
        console.log(out);
    })
}

document.querySelector(`#submit`).onclick = () => {
    if (joinType == `log`) {
        cn.query(`show tables`,(err, out) => {
            if(err) throw err;
            console.log(out);
        })
    }
    else if (joinType == `sign`) {

    }

}

