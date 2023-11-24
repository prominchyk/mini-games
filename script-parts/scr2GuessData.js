  //guessData

  let select = document.querySelector('select');
  let tds = document.querySelectorAll('td');
  let timer = document.querySelector('#timer');
  let buttonGameGuessData = document.querySelector('#startGameGuessData');
  let buttonGameGuessData2 = document.querySelector('#startGameGuessData2');
  let buttonGameGuessData3 = document.querySelector('#startGameGuessData3');
  let sadSmile = document.querySelector('#sadSmile');
  let happySmile = document.querySelector('#happySmile');



  select.addEventListener('change', gameVariants);
  
  function gameVariants() {
    if(select.selectedIndex == 0) {
        for(let td of tds) {
        td.classList.remove('activeTd');
        td.classList.remove('common');
        td.classList.remove('prize');
        td.classList.remove('endGameTd');
        td.textContent = '';
    }
        timer.textContent = 'Таймер';
        buttonGameGuessData.style.display = 'none';
        buttonGameGuessData2.style.display = 'none';
        buttonGameGuessData3.style.display = 'none';
        sadSmile.style.display = 'none';
        happySmile.style.display = 'none';
} 
    if(select.selectedIndex == 1) {
        for(let td of tds) {
        td.classList.remove('activeTd');
        td.classList.remove('common');
        td.classList.remove('prize');
        td.classList.remove('endGameTd');
        td.textContent = '';
    }
        timer.textContent = '50';
        buttonGameGuessData.style.display = 'inline';
        buttonGameGuessData2.style.display = 'none';
        buttonGameGuessData3.style.display = 'none';
        sadSmile.style.display = 'none';
        happySmile.style.display = 'none';
} 
if(select.selectedIndex == 2) {
        for(let td of tds) {
        td.classList.remove('activeTd');
        td.classList.remove('common');
        td.classList.remove('prize');
        td.classList.remove('endGameTd');
        td.textContent = '';
    }
        timer.textContent = '40';
        buttonGameGuessData2.style.display = 'inline';
        buttonGameGuessData.style.display = 'none';
        buttonGameGuessData3.style.display = 'none';
        sadSmile.style.display = 'none';
        happySmile.style.display = 'none';
}
if(select.selectedIndex == 3) {
        for(let td of tds) {
        td.classList.remove('activeTd');
        td.classList.remove('common');
        td.classList.remove('prize');
        td.classList.remove('endGameTd');
        td.textContent = '';
    }
        timer.textContent = '40';
        buttonGameGuessData3.style.display = 'inline';
        buttonGameGuessData.style.display = 'none';
        buttonGameGuessData2.style.display = 'none';
        sadSmile.style.display = 'none';
        happySmile.style.display = 'none';
}
  }

    //перший варіант гри
  function startguessData() {
    sadSmile.style.display = 'none';
    happySmile.style.display = 'none';
    for(let td of tds) {
        td.classList.remove('prize');
        td.classList.remove('endGameTd');
    }
  }
//в 5% випадків дає масив не 10 елем, а менший
  function createRandomNumbers() {
    let tdsArr = [];
    for(let i = 0; i < 10; i++) {
        let randomGuessData = Math.floor(Math.random() * 64 + 1);
        tdsArr.push(randomGuessData); 
    }  
    let tdsArrRes = Array.from(new Set(tdsArr));
    if(tdsArrRes.length < 10) {
        let diff = 10 - tdsArrRes.length;
        for(let j = 0; j < diff; j++) {
        let randomGuessData = Math.floor(Math.random() * 64 + 1);
        tdsArrRes.push(randomGuessData); 
        }
        }

        return tdsArrRes.sort();
  }

//100% унікальний масив з 10 елем
  function createRandomNumbers2() {
      let currValueArr = [];
      let tdsArr = [];
      let tdsArrRes = [];
      for(let i = 1; i <= 64; i++) {
        currValueArr.push(i);
      }
      
      function random(){
        return Math.floor(Math.random() * currValueArr.length)
      };
      while (currValueArr.length > 0)
      {
        let randomIndex = random();
        tdsArr.push(currValueArr[randomIndex]);
        currValueArr[randomIndex] = currValueArr[currValueArr.length - 1];
        currValueArr.pop(); 
      }
      
      for(let j = 0; j < 10; j++) {
        tdsArrRes.push(tdsArr[j]);
      }

      return tdsArrRes; 
    }
  
  
    let counterColored = 0;

let arrTd = [];

  function tdColored(event) {
        event.target.classList.remove('common');
        event.target.classList.add('activeTd');
        for(let arrNum of arrTd) {
           if(event.target.textContent == arrNum) {
            counterColored++;
            event.target.classList.remove('common');
            event.target.classList.remove('activeTd');
            event.target.classList.add('prize');
            event.target.textContent = '';
           } 
        if(counterColored == 10) {
            winGuessData();
        }
        }
    }

function endguessData() {
    buttonGameGuessData.style.display = 'inline';
    sadSmile.style.display = 'inline';
    counterColored = 0;
    select.style.display = 'inline';
    timer.textContent = '50';
    for(let td of tds) {
        td.removeEventListener('click', tdColored);
        td.classList.remove('activeTd');
        td.classList.add('common');
    }
}

function winGuessData() {
    happySmile.style.display = 'inline';
    counterColored = 0;
    counterTimer = 0;
    for(let td of tds) {
        td.removeEventListener('click', tdColored);
        td.classList.add('endGameTd');

    }
}

function playguessData() {
    for(let td of tds) {
        td.textContent = '';
    }
    buttonGameGuessData.removeEventListener('click', playguessData2);
    buttonGameGuessData.style.display = 'none';
    arrTd = createRandomNumbers2();
    console.log(arrTd);
    select.style.display = 'none';
    let counterTd = 1;
    for(let td of tds) {
        td.textContent = counterTd++;
        td.addEventListener('click', tdColored);
    }
  }

let counterTimer = 50;
buttonGameGuessData.addEventListener('click', function setTimer() {
  let timerId = setInterval(function() {
    timer.innerHTML = `Вибрані комірки можуть бути розташовані будь-яким чином.<br> Таймер: ${counterTimer--} c.`;
        if(counterTimer < 0) {
        clearInterval(timerId);
        endguessData();
        buttonGameGuessData.addEventListener('click', setTimer);
        buttonGameGuessData.addEventListener('click', startguessData);
        counterTimer = 50;
  }
    }, 1000)
  this.removeEventListener('click', setTimer);
})

buttonGameGuessData.addEventListener('click', playguessData);

//другий варіант гри

    function startguessData2() {
        sadSmile.style.display = 'none';
        happySmile.style.display = 'none';
    for(let td of tds) {
        td.classList.remove('prize');
        td.classList.remove('endGameTd');
    }
  }

//100% унікальний масив з 10 елем
  function createRandomNumbers3() {
      let currValueArr = [];
      let tdsArr = [];
      let tdsArrRes = [];
      for(let i = 1; i <= 32; i++) {
        currValueArr.push(i);
      }
      
      function random(){
        return Math.floor(Math.random() * currValueArr.length)
      };
      while (currValueArr.length > 0)
      {
        let randomIndex = random();
        tdsArr.push(currValueArr[randomIndex]);
        currValueArr[randomIndex] = currValueArr[currValueArr.length - 1];
        currValueArr.pop(); 
      }
      
      for(let j = 0; j < 10; j++) {
        tdsArrRes.push(tdsArr[j]);
      }

      return tdsArrRes; 
    }
  
  
    let counterColored2 = 0;

let arrTd2 = [];

  function tdColored2(event) {
        event.target.classList.remove('common');
        event.target.classList.add('activeTd');
        for(let arrNum of arrTd2) {
           if(event.target.textContent == arrNum) {
            counterColored2++;
            event.target.classList.remove('common');
            event.target.classList.remove('activeTd');
            event.target.classList.add('prize');
            event.target.textContent = '';
           } 
        if(counterColored2 == 10) {
            winGuessData2();
        }
        }
    }

function endguessData2() {
    buttonGameGuessData2.style.display = 'inline';
    sadSmile.style.display = 'inline';
    select.style.display = 'inline';
    timer.textContent = '40';
    counterColored2 = 0;
    for(let td of tds) {
        td.removeEventListener('click', tdColored2);
        td.classList.remove('activeTd');
        td.classList.add('common');
    }
}

function winGuessData2() {
    happySmile.style.display = 'inline';
    counterColored2 = 0;
    counterTimer2 = 0;
    for(let td of tds) {
        td.removeEventListener('click', tdColored2);
        td.classList.add('endGameTd');

    }
}

function playguessData2() {
    for(let td of tds) {
        td.textContent = '';
    }
    buttonGameGuessData2.style.display = 'none';
    arrTd2 = createRandomNumbers3();
    console.log(arrTd2);
    select.style.display = 'none';
    let counterTd = 1;
    for(let j = 0; j < 100; j += 2) {
        tds[j].textContent = counterTd++;
        for(let td of tds) {
        td.addEventListener('click', tdColored2);
        }
    }
  }

let counterTimer2 = 40;
buttonGameGuessData2.addEventListener('click', function setTimer2() {
  let timerId2 = setInterval(function() {
    timer.innerHTML = `Вибрані комірки не можуть бути розташовані по горизонталі.<br> Таймер: ${counterTimer2--} c.`;
        if(counterTimer2 < 0) {
        clearInterval(timerId2);
        endguessData2();
        buttonGameGuessData2.addEventListener('click', setTimer2);
        buttonGameGuessData2.addEventListener('click', startguessData2);
        counterTimer2 = 40;
  }
    }, 1000)
  this.removeEventListener('click', setTimer2);
})

buttonGameGuessData2.addEventListener('click', playguessData2);

//третій варіант гри

function startguessData3() {
        sadSmile.style.display = 'none';
        happySmile.style.display = 'none';
    for(let td of tds) {
        td.classList.remove('prize');
        td.classList.remove('endGameTd');
    }
  }

//100% унікальний масив з 10 елем
  function createRandomNumbers4() {
      let currValueArr = [];
      let tdsArr = [];
      let tdsArrRes = [];
      for(let i = 1; i <= 22; i++) {
        currValueArr.push(i);
      }
      
      function random(){
        return Math.floor(Math.random() * currValueArr.length)
      };
      while (currValueArr.length > 0)
      {
        let randomIndex = random();
        tdsArr.push(currValueArr[randomIndex]);
        currValueArr[randomIndex] = currValueArr[currValueArr.length - 1];
        currValueArr.pop(); 
      }
      
      for(let j = 0; j < 10; j++) {
        tdsArrRes.push(tdsArr[j]);
      }

      return tdsArrRes; 
    }
  
  
    let counterColored3 = 0;

let arrTd3 = [];

  function tdColored3(event) {
        event.target.classList.remove('common');
        event.target.classList.add('activeTd');
        for(let arrNum of arrTd3) {
           if(event.target.textContent == arrNum) {
            counterColored3++;
            event.target.classList.remove('common');
            event.target.classList.remove('activeTd');
            event.target.classList.add('prize');
            event.target.textContent = '';
           } 
        if(counterColored3 == 10) {
            winGuessData3();
        }
        }
    }

function endguessData3() {
    buttonGameGuessData3.style.display = 'inline';
    sadSmile.style.display = 'inline';
    select.style.display = 'inline';
    timer.textContent = '40';
    counterColored3 = 0;
    for(let td of tds) {
        td.removeEventListener('click', tdColored3);
        td.classList.remove('activeTd');
        td.classList.add('common');
    }
}

function winGuessData3() {
    happySmile.style.display = 'inline';
    counterColored3 = 0;
    counterTimer3 = 0;
    for(let td of tds) {
        td.removeEventListener('click', tdColored3);
        td.classList.add('endGameTd');

    }
}

function playguessData3() {
    for(let td of tds) {
        td.textContent = '';
    }
    buttonGameGuessData3.style.display = 'none';
    arrTd3 = createRandomNumbers4();
    console.log(arrTd3);
    select.style.display = 'none';
    let counterTd = 1;
    for(let k = 0; k < 100; k += 3) {
        tds[k].textContent = counterTd++;
        for(let td of tds) {
        td.addEventListener('click', tdColored3);
        }
    }
  }

let counterTimer3 = 40;
buttonGameGuessData3.addEventListener('click', function setTimer3() {
  let timerId3 = setInterval(function() {
    timer.innerHTML = `Вибрані комірки не можуть бути розташовані по горизонталі та вертикалі.<br> Таймер: ${counterTimer3--} c.`;
        if(counterTimer3 < 0) {
        clearInterval(timerId3);
        endguessData3();
        buttonGameGuessData3.addEventListener('click', setTimer3);
        buttonGameGuessData3.addEventListener('click', startguessData3);
        counterTimer3 = 40;
  }
    }, 1000)
  this.removeEventListener('click', setTimer3);
})

buttonGameGuessData3.addEventListener('click', playguessData3);