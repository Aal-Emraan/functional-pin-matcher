document.getElementById('button').addEventListener('click',function(){
    const number = Math.floor(Math.random() * 8999) + 1000;
    document.getElementById('pin-number').value = number;
})

document.getElementById('keypad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const previousNumber = document.getElementById('calc-display').value;
    document.getElementById('calc-display').value = previousNumber + number;
})

document.getElementById('submit').addEventListener('click', function(){
    
})