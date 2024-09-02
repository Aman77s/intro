
function randomcolor(){
    let hax = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hax[Math.floor(Math.random() * 16 )]
    }
    return color;
    
}

let intervalId;    
const changingColor = function(){
intervalId = setInterval(changeColor, 2000)

function changeColor(){
    document.body.style.backgroundColor = randomcolor()
}
}

const stopChangingColor = function (){
clearInterval(intervalId)
}


document.querySelector('#start').addEventListener('click', changingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)