const connection = require('./сonnectionDB.js');

function checkConnection() {
    connection.client.connect(err => {
        if (err) throw err;
        else {
            createDatabase();
        }
    });
}

function createDatabase() {
    // DROP TABLE IF EXISTS users;
    const query = `
        CREATE TABLE users (user_id serial PRIMARY KEY, 
        user_surname VARCHAR(50), 
        user_name VARCHAR(50), 
        user_middle_name VARCHAR(50));
    `;

    connection.client
        .query(query)
        .then(() => {
            console.log('Table created successfully!');
        })
        .catch(err => console.log(err))
        .then(() => {
            console.log('Finished execution, exiting now');

        });
}

checkConnection();