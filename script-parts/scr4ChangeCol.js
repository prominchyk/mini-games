//change-color
let rows = 4;
  let cols = 4;
  let table = document.querySelector('#fieldChangeColor');
  let colors = ['red', 'green', 'blue'];
  let clickCounterText = document.querySelector('#clickCounter span');
  let minClickCounter = document.querySelector('#minClickCounter');
  let minClickCounterSpan = document.querySelector('#minClickCounter span');
  let clickCounter = 0;

  function randomChangeColor() {
    return Math.floor(Math.random() * colors.length);
  }

  function changeColor(arr, elem) {
   let newIndex = arr.indexOf(elem) + 1;
   if(arr.indexOf(elem) == arr.length - 1) {
    newIndex = 0;
   }
   let newColor = colors[newIndex];
   return newColor;
  }

  for(let i = 0; i < cols; i++) {
    let tr = document.createElement('tr');
    for(let j = 0; j < rows; j++) {
      let td = document.createElement('td');
      td.classList.add(colors[randomChangeColor()]);
      tr.append(td);
    }
    table.append(tr);
  }

  let tdsChangeColor = table.querySelectorAll('td');

  table.addEventListener('click', playingGame);

  function playingGame(event) {
    clickCounter++;
    clickCounterText.textContent = clickCounter;
    let currColor = event.target.className;
    event.target.classList.add(changeColor(colors, event.target.className));
    event.target.classList.remove(currColor);
    let newColor = event.target.className;
    let counter = 0;
    for(let i = 0; i < tdsChangeColor.length; i++) {
      if(tdsChangeColor[i].classList.contains(newColor) == true) {
        counter++;
        if(counter == tdsChangeColor.length) {
          alert('Вітаємо, Ви перемогли!');
          table.removeEventListener('click', playingGame);
          minClickCounter.style.display = 'block';

        }
      }
    }
  }

  let tdsRed = 0;
  let tdsGreen = 0;
  let tdsBlue = 0;
  let minCounterRed = 0;
  let minCounterGreen = 0;
  let minCounterBlue = 0;

  for(let i = 0; i < tdsChangeColor.length; i++) {
    if(tdsChangeColor[i].classList.contains(colors[0])) {
      tdsRed++;
    }
    if(tdsChangeColor[i].classList.contains(colors[1])) {
      tdsGreen++;
    }
    if(tdsChangeColor[i].classList.contains(colors[2])) {
      tdsBlue++;
    }
    minCounterRed = tdsChangeColor.length - tdsRed + tdsGreen;
    minCounterGreen = tdsChangeColor.length - tdsGreen + tdsBlue;
    minCounterBlue = tdsChangeColor.length - tdsBlue + tdsRed;
    }

  let minClickWin = Math.min(minCounterRed, minCounterGreen, minCounterBlue);
  minClickCounterSpan.textContent = minClickWin;