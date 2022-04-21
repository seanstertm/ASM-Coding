var hundrethseconds = 0;
var hundrethsecond = setInterval(increment, 10)

var elements = {
    elements: [
        {id: 'isaac', height: 90}, 
        {id: 'celeste', height: 85},
        {id: 'hk', height: 80},
        {id: 'deadCells', height: 70},
        {id: 'revita', height: 65},
        {id: 'etg', height: 65},
        {id: 'sts', height: 60},
        {id: 'cuphead', height: 55},
        {id: 'portal', height: 45},
        {id: 'ror2', height: 35}
    ]
}

function display() {
    for(let step = 0; step < 10; step++) {
        elements.elements[step].id = document.getElementById(elements.elements[step].id)
    }
}

function increment() {
    hundrethseconds++;
    if(hundrethseconds >= 10000) {
        clearInterval(hundrethsecond)
    }
    
    for(let step = 0; step < 10; step++) {
        if(elements.elements[step].id.style.height < `${elements.elements[step].height}%`) {
            elements.elements[step].id.style.height = `${25 + Math.log(hundrethseconds)* elements.elements[step].height/6.5}%`
        }
    }
}