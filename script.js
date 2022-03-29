var hundrethseconds = 0;
var hundrethsecond = setInterval(increment, 10)

function display() {
    var isaac = document.getElementById("isaac")
}

function increment() {
    hundrethseconds++;
    if(hundrethseconds >= 200) {
        clearInterval(hundrethsecond)
    }

    if(hundrethseconds < (90 - 25)) {
        isaac.style.height = `${25 + hundrethseconds}%`
    }
}