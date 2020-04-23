let HTMLParser = require('node-html-parser');
const connection = require('./сonnectionDB.js');

let root = HTMLParser.parse('<div class="outer"></div><div class="outer"><div class="inner"></div></div>\n' +
    '<div class="outer"></div>\n' +
    '<div><p class="full_name">Пляко Анастасия   Игоревна</p></div>\n' +
    '<div class="some_class">\n');

//find full name with tag p
function findFullName() {
    if (root.querySelector('.full_name').tagName === 'p') {
        let str = root.text;
        parsingName(str);
    }
}

//remove extra spaces, add to the array and display a message
function parsingName(fullName) {
    fullName = fullName.replace(/\s+/g, ' ').trim();
    let fullNameArr = fullName.split(' ');
    switch (fullNameArr.length) {
        case 1:
            console.log("Ура! Мы нашли имя: " + fullNameArr[0] + "!");
            insertFullName(fullNameArr);
            break;
        case 2:
            console.log("Ура! Мы нашли фамилию: " + fullNameArr[0] + ", имя: " + fullNameArr[1] + "!");
            insertFullName(fullNameArr);
            break;
        case 3:
            console.log("Ура! Мы нашли фамилию: " + fullNameArr[0] + ", имя: " + fullNameArr[1]
                + ", отчество: " + fullNameArr[2] + "!");
            insertFullName(fullNameArr);
            break;
        default:
            console.log("Данные не соответствуют  формату")
    }
}

//insert full name in database
function insertFullName(fullNameArr) {
    connection.client.connect(err => {
        if (err) throw err;
        else {
            const text = `INSERT INTO users (user_surname, user_name, user_middle_name)  VALUES($1, $2, $3)`;
            const values = [fullNameArr[0], fullNameArr[1], fullNameArr[2]];
            connection.client
                .query(text, values)
                .then(() => {
                    console.log('Your name has been added to the database');
                    connection.client.end(console.log('Closed client connection'));
                })
                .catch(err => console.log(err))
        }
    });
}

findFullName();

