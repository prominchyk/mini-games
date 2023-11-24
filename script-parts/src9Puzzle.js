let puzzle = document.querySelector('#puzzle');
let rightPuzzleStr = '1, 2, 3, 4, 5, 6, 7, 8, 9';
let currentPuzzleStr = '';
let arrSrcImg = [{src: "trainPart1.png", num: 1}, {src: "trainPart2.png", num: 2}, {src: "trainPart3.png", num: 3}, {src: "trainPart4.png", num: 4}, {src: "trainPart5.png", num: 5}, {src: "trainPart6.png", num: 6}, {src: "trainPart7.png", num: 7}, {src: "trainPart8.png", num: 8}, {src: "trainPart9.png", num: 9}];
let arrSrcImgShuffled = arrSrcImg.sort(() => Math.random() - 0.5);
let imgPart;

for(let i = 0; i < arrSrcImg.length; i++) {
  imgPart = document.createElement('img');
  imgPart.src = arrSrcImg[i].src;
  imgPart.draggable = true;
  puzzle.append(imgPart);
}

let imageParts = document.querySelectorAll('img');
let currentImg;
let nextImg;
let nextImgSrc;
imageParts.forEach(function(elem) {
  elem.addEventListener('dragstart', function() {
    currentImg = this;
  })
})

puzzle.addEventListener('dragover', function(event) {
  event.preventDefault();
});

puzzle.addEventListener('drop', function(event) {
  nextImg = event.target;
  nextImgSrc = nextImg.src;
  nextImg.src = currentImg.src;
  currentImg.src = nextImgSrc;
  let puzzleChild = puzzle.children;
  for(let i = 0; i < puzzleChild.length; i++) {
    let puzzleNumber = puzzleChild[i].src.toString().slice(-5, -4);
    currentPuzzleStr += (puzzleNumber + ', ');
    if(currentPuzzleStr.slice(0, currentPuzzleStr.length - 2) === rightPuzzleStr) {
      puzzle.style.backgroundImage = "url('train2.png')";
      puzzle.style.border = '8px double darkgreen';
      puzzle.style.width = '359px';
      puzzle.style.height = '352px';
      for(let elem of puzzleChild) {
        elem.style.display = 'none';
      }
    }
  }
  currentPuzzleStr = '';
  })