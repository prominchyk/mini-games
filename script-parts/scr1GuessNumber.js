//guessNumber
let elem = document.querySelector('#elem');
elem.focus();
let para = document.querySelector('#text');
let numbers = document.querySelector('#num');
let counter = document.querySelector('#counter');
let random = Math.floor(Math.random() * 100 + 1);
let title = document.querySelector('h1');
let linkProverb = document.querySelector('#proverb');
let linkPicture = document.querySelector('#picture');
let linkTools = document.querySelector('#tools')
let nickName = document.querySelector('#nickName');
elem.addEventListener('keypress', game);
elem.addEventListener('keypress', addNumbersList);
elem.addEventListener('keypress', updateElem);
nickName.addEventListener('click', name2);

    
let ourNumber = random; 
let resultOfGame = [];
let bestResult;
        
para.innerHTML = 'Введіть будь-яке число від 1 до 100 в поле вище та натисніть клавішу Enter. У Вас є 10 спроб. <br><i>Авторизуйтесь, щоб бачити Ваш кращий результат.</i>';
                    
function game(event) {          
    if(event.key == 'Enter') {
        let curNumber = elem.value;
        if(curNumber < ourNumber) {
            para.textContent = 'Введіть більше число.';
            para.style.color = 'black';
        } if(curNumber > ourNumber) {
            para.textContent = 'Введіть менше число.';
            para.style.color = 'black';
        } if (curNumber == ourNumber) {
            elem.focus();
            resultOfGame.push(11 - counter.textContent);
            bestResult = Math.min(...resultOfGame);
            para.textContent = 'Вітаємо! Ви вгадали число! Зіграємо ще раз?';
            if(nickName.textContent != 'Авторизуватись') {
                para.textContent = `${nickName.textContent}, вітаємо! Ви вгадали число! Ваш кращий результат - ${bestResult} спроб. Зіграємо ще раз?`;
                if(resultOfGame.length == 1) {
                para.textContent = `${nickName.textContent}, вітаємо! Ви вгадали число за ${bestResult} спроб. Зіграємо ще раз?`;  
                }
            }
            para.style.color = 'blue';
            endGame();
            newGame();
        } if(!(++curNumber >= 2 && curNumber <=101)) {
            para.textContent = 'Введіть число від 1 до 100.';
            para.style.color = 'red';
            counter.textContent++;
        } if(counter.textContent == 1) {
            elem.focus();
            para.textContent = 'На жаль, Ви програли. Зіграємо ще раз?';
            if(nickName.textContent != 'Авторизуватись') {
                para.textContent = `${nickName.textContent}, на жаль, Ви програли. Ваш кращий результат - ${bestResult} спроб. Зіграємо ще раз?`;
                if(resultOfGame.length == 1 || resultOfGame.length == 0) {
                para.textContent = `${nickName.textContent}, на жаль, Ви програли. Зіграємо ще раз?`;  
                }
            }
            para.style.color = 'black';
            endGame();
            newGame();
        }
 }}

        
    function addNumbersList(event) {
        if(event.key == 'Enter') {
            let curNumber = elem.value;
            numbers.textContent += ( ' ' + curNumber);
            numbers.style.color = 'black';
            counter.textContent--;
    }}

    function endGame() {
        elem.value = '';
        numbers.textContent = '';
    }

    function newGame() {
        let newRandom = Math.floor(Math.random() * 100 + 1);
        ourNumber = newRandom;
        counter.textContent = 11;
        
    }

    function updateElem(event) {
        if(event.key == 'Enter') {
        elem.value = '';
}}


/*
Авторизація з промпт:
function name() {
    let myName;
    if(nickName.textContent == 'Авторизуватись') {
        myName = prompt('Введіть Ваше ім\'я.');
        if(myName == '' || myName == null) {
        myName = 'Анонім';
    }
    }
    if(nickName.textContent == 'Log in') {
        myName = prompt('Enter your name.');
        if(myName == '' || myName == null) {
        myName = 'Anonym';
    }
    }
    nickName.textContent = myName;
    nickName.removeEventListener('click', name);
}*/

function name2() {
    let input = document.createElement('input');
    nickName.append(input);
    input.focus();
    input.addEventListener('blur', function(event) {
        //if(event.key == 'Enter') {
        nickName.textContent = this.value || 'Анонім';
        
        nickName.addEventListener('click', name2);
        //}
    })
    nickName.removeEventListener('click', name2);
}