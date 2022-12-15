let button1 = document.querySelector('#button1');
let Send = document.querySelector('#Send');
let gameStart = document.querySelector('#gameStart');
let question = document.querySelector('#question');
let button2 = document.querySelector('#button2');
let btnGroup = document.querySelector('#btnGroup');
let btnRetry = document.querySelector('#btnRetry');

Send.addEventListener('click', function(){
    button1.style.display = 'none';
    let minValue = parseInt(document.querySelector ('#minValue', 0).value);
    let maxValue = parseInt(document.querySelector ('#maxValue', 100).value);

    minValue = parseInt(((1000 <= minValue)||(minValue<= -1000)) ? (minValue = -999) : (minValue));
    maxValue = parseInt(((1000 <= maxValue)||(maxValue<= -1000)) ? (maxValue = 999) : (maxValue));

    if (!maxValue || !minValue) {
    minValue = 0;
    maxValue = 100;
    }
    gameStart.style.display = 'block';

    question.innerHTML = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю!`;

button2.addEventListener('click', function(){
    button2.style.display = 'none';
    question.style.display = 'none';
    btnGroup.style.display = 'block';
})
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

console.log(answerNumber);
orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            console.log(answerNumber);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Возможно это число ${answerNumber}?`;
        }
    }
})
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue){
            const phraseRandom1 = Math.round( Math.random());
            const answerPhrase1 = (phraseRandom1 === 0) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase1;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            console.log(answerNumber);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Может быть это число ${answerNumber}?`;
        }
    }
})
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
         const Random = Math.round( Math.random());
         const answer = (Random === 1) ?
            `Я справился!🥳` :            
            `Да это легко! 😌`;


            answerField.innerText = answer;
            gameRun = false;
    }
})
})
btnRetry.addEventListener('click', function () {
    window.location.reload()
})
