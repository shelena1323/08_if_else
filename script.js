let button1 = document.querySelector('#button1');
let Send = document.querySelector('#Send');
let gameStart = document.querySelector('#gameStart');
let question = document.querySelector('#question');
let button2 = document.querySelector('#button2');
let btnGroup = document.querySelector('#btnGroup');
let btnRetry = document.querySelector('#btnRetry');

var one = ["ноль", "один ", "два ", "три ", "четыре ", "пять ", "шесть ", "семь ", "восемь ", "девять ",];
var two = ["", "одиннадцать ", "двенадцать ", "тринадцать ", "четырнадцать ", "пятнадцать ", "шестнадцать ", "семнадцать ", "восемнадцать ", "девятнадцать "];
var three = ["", "десять ", "двадцать ", "тридцать ", "сорок ", "пятьдесят ", "шестьдесят ", "семьдесят ", "восемьдесят ", "девяносто "];
var four = ["", "сто ", "двести ", "триста ", "четыреста ", "пятьсот ", "шестьсот ", "семьсот ", "восемьсот ", "девятьсот "]; 


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
var answerNumber  = parseInt(Math.floor((minValue + maxValue) / 2));
let orderNumber = 1;
let gameRun = true;    
var text = answerNumber.toString();
var nums = text.split('');

console.log(answerNumber);
console.log(text);

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
orderNumberField.innerText = orderNumber;

console.log(nums);
var a = 0;
const m = 'минус '
var e = d = s = '';

if (nums.length == 1){
    if (answerNumber >= 0 && answerNumber < 10){
        let i = parseInt(nums[0]); 
        a = one[i];  
    }      
}
if (nums.length == 2){
    if (answerNumber > 10 && answerNumber < 99){
        let i = parseInt(nums[1]);
        let j = parseInt(nums[0]);
        if (j == 1 && i != 0){
            a = two[i];
        } else if (i == 0){
            a = three[j];
        } else if (j>1 && i>0){
            e = one[i];
            d = three[j];
            a = j+e;
        }           
    } else if (answerNumber<0 && answerNumber > -10){
        e = one[i];
        a = m + e;
    }
}
if (nums.length == 3){
    let i = parseInt(nums[2]);
    let j = parseInt(nums[1]);
    let k = parseInt(nums[0]);
    if (answerNumber > 99 && answerNumber < 1000){
        if (j > 1 && i != 0){
            s = four[k];
            d = three[j];
            e = one[i];
            a = s+d+e;
        } else if (j == 0 && i != 0){
            a = s+e;
        } else if (i == 0 && j != 0){        
            a = s+d;
        } else if ((j && i) == 0){            
            a = s;
        } else if (j==1 && i>0){
            d = two[i];
            a = s+d;
        } 
    }
    if (answerNumber > -100 && answerNumber < -9){
    let i = parseInt(nums[2]);
    let j = parseInt(nums[1]);
    if (j>1 && i>0){
        e = one[i];
        d = three[j];
        a = m+j+e;
    } else if (i == 0){
        a = m+d;
    } else if (j == 1 && i != 0){        
        d = two[i];
        a = m+d;
    }
    }
}       
if (nums.length == 4){
    let i = parseInt(nums[3]);
    let j = parseInt(nums[2]);
    let k = parseInt(nums[1]);
    if (answerNumber < -99 && answerNumber > -1000){
        if (j > 1 && i != 0){
            s = four[k];
            d = three[j];
            e = one[i];
            a = m+s+d+e;
        } else if (j == 0 && i != 0){
            a = m+s+e;
        } else if (i == 0 && j != 0){        
            a = m+s+d;
        } else if ((j && i) == 0){            
            a = m+s;
        } else if (j==1 && i>0){
            d = two[i];
            s = four[k];
            a = m+s+d;
        }
        
    }
}
answerField.innerText = `Вы загадали число ${a}?`;

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
//встроить код так, чтобы и в других ответах была сумма прописью у меня не получилось. Буду рада если объясните как это сделать.
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
