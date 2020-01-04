
var boxCount = 10;
var currentIndex = 5;
var boxList = [];
var activeClass = 'active-box';
var inactiveClass = 'in-active-box';
function initBoxes() {
    for (var i = 1; i <= boxCount; i += 1) {
        document.getElementsByClassName('container')[0].innerHTML += ('<div class="box-list box-index-' + i+'" value='+i+'>' + i + '</div>');
        boxList.push(i);
    }
}
function initHandler() {
    for (var i = 1; i <= boxCount; i += 1) {
        document.getElementsByClassName('box-index-' + i)[0].addEventListener('click', onClickHandler); 
    }
}
function onClickHandler(e) {
    currentIndex = e.target.getAttribute('value');
    update();
}
function indexHandler() {
    if (currentIndex < 1) {
        currentIndex = 1;
    } else if (currentIndex > boxCount) {
        currentIndex = boxCount;
    }
    update();
}
function inactive(value) {
    return value > currentIndex;
}
function equals(value) {
    return value == currentIndex;
}
function clean() {
    document.querySelectorAll(".box-list").forEach(function(element) {
        element.classList.remove(activeClass);
        element.classList.remove(inactiveClass);
    });
}
function update() {
    clean();
    boxList.filter(inactive).forEach((v)=>{document.getElementsByClassName('box-index-' + v)[0].classList.add(inactiveClass);})
    boxList.filter(equals).forEach((v)=>{document.getElementsByClassName('box-index-' + v)[0].classList.add(activeClass);})
  
}
function keyDownHandler(e) {
    switch(e.keyCode) {
        case 38:
          currentIndex -= 1;
          indexHandler();
          break;
        case 40:
          currentIndex += 1;
          indexHandler();
          break;
        default:
      }
}
function init() {
    initBoxes();
    initHandler();
    update();
}
if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', init, false);
    document.addEventListener('keydown', keyDownHandler);
}