const mysql = require('mysql')

// 创建数据库连接
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    port: '3306',
    database: 'web class'
})
// 开始连接
conn.connect()

//执行SQL的函数
function exec(sql, params) {
    const promise = new Promise((resolve, reject) => {
        conn.query(sql, params, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        })
    });
    return promise;
}

module.exports = exec