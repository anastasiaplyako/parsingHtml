const {Pool, Client} = require('pg');

const pool = new Pool(
    {
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: '12345678',
    }
);

pool.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    } else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

module.exports = {
    pool: pool,
    client: new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: '12345678',
    })
};