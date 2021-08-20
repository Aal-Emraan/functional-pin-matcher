document.getElementById('button').addEventListener('click',function(){
    const number = Math.floor(Math.random() * 8999) + 1000;
    document.getElementById('pin-number').value = number;
})

document.getElementById('keypad').addEventListener('click',function(event){
    const number = event.target.innerText;
    if(!isNaN(number)){
        const previousNumber = document.getElementById('calc-display').value;
        document.getElementById('calc-display').value = previousNumber + number;
    }
})

document.getElementById('submit').addEventListener('click', function(){
    const pin = document.getElementById('pin-number').value;
    const givenPin = document.getElementById('calc-display').value;
    if(pin == givenPin){
        document.getElementById('success').style.display = 'block';
        document.getElementById('error').style.display = 'none';
    }else{
        document.getElementById('error').style.display = 'block';
        document.getElementById('success').style.display = 'none';
    }
    document.getElementById('calc-display').value = '';
})

document.getElementById('clear').addEventListener('click', function(){
    document.getElementById('calc-display').value = '';
})
document.getElementById('clear1').addEventListener('click', function(){
    const display = document.getElementById('calc-display').value;
    const newDisplay = display.substring(0, display.length -1);
    document.getElementById('calc-display').value = newDisplay;
})