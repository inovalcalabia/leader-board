var boxCount = 10;
var currentIndex = 5;
var boxList = [];
var activeClass = 'active-box';
var inactiveClass = 'in-active-box';

function initBoxes() {
    for (var i = 1; i <= boxCount; i += 1) {
        var box = document.createElement("div");
        box.className = 'box';
        box.textContent = i;
        box.onclick = onClickHandler;
        box.setAttribute('value', i);
        document.getElementsByClassName('container')[0].appendChild(box);
        boxList.push(box);
    }
}
function onClickHandler(e) {
    currentIndex = Number(e.target.getAttribute('value'));
    render();
}
function inactive(value) {
    return Number(value.getAttribute('value')) > currentIndex;
}
function equals(value) {
    return Number(value.getAttribute('value')) == currentIndex;
}
function clean() {
    document.querySelectorAll(".box").forEach(function(element) {
        element.classList.remove(activeClass);
        element.classList.remove(inactiveClass);
    });
}
function render() {
    clean();
    boxList.filter(inactive).forEach((v)=>{v.classList.add(inactiveClass);})
    boxList.filter(equals).forEach((v)=>{v.classList.add(activeClass);})
}
function keyDownHandler(e) {
    if (e.keyCode === 38 && currentIndex > 1) {
        currentIndex -= 1;
    }
    if (e.keyCode === 40 && currentIndex < boxCount) {
        currentIndex += 1;
    }
    render();
}
function init() {
    initBoxes();
    render();
}
if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', init);
    document.addEventListener('keydown', keyDownHandler);
}