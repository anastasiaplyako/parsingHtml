$('body').append('<div id = "something"><div>');
let someElement = document.createElement("p");
someElement.innerHTML = "Пляко     Анастасия     Игоревна";
someElement.className = "full_name";
$("#something").append("<div class=\"wrapper\">" + someElement.outerHTML + "</div>");

window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    let fullNameArr = [];

    function findAllElements(element) {
        element.childNodes.forEach(node => {
            if (node.nodeName === "P") {
                let parent = document.querySelector('.full_name');
                let fullName = parent.textContent;
                parsingName(fullName)
            }
            if (element.childNodes.length > 1) {
                findAllElements(node);
            }
        })
    }

    function parsingName(fullName) {
        fullName = fullName.replace(/\s+/g, ' ').trim();
        fullNameArr = fullName.split(' ');
        switch (fullNameArr.length) {
            case 1:
                alert("Ура! Мы нашли имя: " + fullNameArr[0] + "!");
                break;
            case 2:
                alert("Ура! Мы нашли фамилию: " + fullNameArr[0] + ", имя: " + fullNameArr[1] + "!");
                break;
            case 3:
                alert("Ура! Мы нашли фамилию: " + fullNameArr[0] + ", имя: " + fullNameArr[1]
                    + ", отчество: " + fullNameArr[2] + "!");
                break;
            default:
                alert("Данные не соответствуют  формату")
        }
    }

    findAllElements(body);
});
