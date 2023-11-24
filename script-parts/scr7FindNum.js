//find number
let sect = document.querySelector('#findNumber section');
let btnsGame = document.querySelectorAll('#findNumber section button');
let nextNumberMessage = document.querySelector('.nextGameNumber');
let newGameButton = document.querySelector('.myStart');
let musicButton = document.querySelector('.myMusic');

let gameButtonsArray = []; // buttons with numbers only
let nextGameNumber;

for(let i = 1; i <= btnsGame.length; i++) {
    gameButtonsArray.push(i);
}

function myRandom(num){
        return Math.floor(Math.random() * num);
    }

function changeBackground() {
    let myPictures = ['url(nature1.jpg)', 'url(nature2.jpg)', 'url(nature3.jpg)', 'url(nature4.jpg)', 'url(nature5.jpg)', 'url(nature6.jpg)', 'url(nature7.jpg)', 'url(nature8.jpg)', 'url(nature9.jpg)'];
    let myCurrIndex = myRandom(myPictures.length-1);
    let myNextIndex = myCurrIndex + 1;
    if(!myCurrIndex === myCurrIndex) {
        sect.style.backgroundImage = myPictures[myCurrIndex];
    } else {
        sect.style.backgroundImage = myPictures[myNextIndex];
    }
} 

function startFindNumber () {
    shuffle(gameButtonsArray);
    changeBackground();
    nextGameNumber = 1;

    let currButtonIndex = 0;
    for(let btnGame of btnsGame) {
        btnGame.style.zIndex = 1;
        btnGame.style.color = `rgb(${myRandom(255)}, ${myRandom(255)}, ${myRandom(255)})`;
        btnGame.textContent = gameButtonsArray[currButtonIndex];
        currButtonIndex++;
    }
    nextNumberMessage.textContent = `Наступне число: ${nextGameNumber}`;
    nextNumberMessage.style.color = 'blue';
}

startFindNumber();

function playingFindNumber(event) {
    if(event.target.textContent == nextGameNumber) {
        nextGameNumber++;
        nextNumberMessage.textContent = `Наступне число: ${nextGameNumber}`; 
        nextNumberMessage.style.color = 'blue';
        event.target.style.zIndex = -1;
    }
    else {
        nextNumberMessage.style.color = 'brown';

    }
    if(nextGameNumber == btnsGame.length + 1) {
        nextNumberMessage.textContent = `Вітаємо з перемогою!`; 
        nextNumberMessage.style.color = 'green';
    }
}

sect.addEventListener('click', playingFindNumber);
newGameButton.addEventListener('click', startFindNumber);

function onMusicButtonClick(event)
    {
        let x = document.getElementById('myAudio');
        let button = event.target;
        if(button.textContent === 'Музика увім.' || button.textContent === 'Music on') {
            if(title.innerHTML === 'Гра Знайди Число - Відкрий Картину') {
            button.textContent = 'Музика вимк.';
            }
            if(title.innerHTML === 'Game Find A Number - Open The Picture') {
            button.textContent = 'Music off';
            }
            x.play();

        } else {
            if(title.innerHTML === 'Гра Знайди Число - Відкрий Картину') {
            button.textContent = 'Музика увім.';
            }
            if(title.innerHTML === 'Game Find A Number - Open The Picture') {
            button.textContent = 'Music on';
            }
            x.pause();
            x.currentTime = 0;
        }
                   
    }

    musicButton.addEventListener('click', function() {
        let x = document.getElementById('myAudio');
        if(this.textContent == 'Музика увім.') {
            this.textContent = 'Музика вимк.';
            x.play();
        } else {
            this.textContent = 'Музика увім.';
            x.pause();
            x.currentTime = 0;
        }
    })