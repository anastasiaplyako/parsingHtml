let HTMLParser = require('node-html-parser');

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
            break;
        case 2:
            console.log("Ура! Мы нашли фамилию: " + fullNameArr[0] + ", имя: " + fullNameArr[1] + "!");
            break;
        case 3:
            console.log("Ура! Мы нашли фамилию: " + fullNameArr[0] + ", имя: " + fullNameArr[1]
                + ", отчество: " + fullNameArr[2] + "!");
            break;
        default:
            console.log("Данные не соответствуют  формату")
    }
}

findFullName();