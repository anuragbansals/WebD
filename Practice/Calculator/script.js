buttons = document.querySelectorAll('button');
screen = document.querySelector('#display');
// screen = document.getElementById('display')
let screenValue = '';
// screen
for(btn of buttons)
{
    btn.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        if(buttonText=='X'){
            buttonText = '*';
            screenValue+=buttonText;
            display.value = screenValue;
        }
        else if(buttonText=='C'){
            buttonText = ""
            screenValue = buttonText;
            display.value = screenValue;
        }
        else if(buttonText=='='){
            display.value = eval(screenValue);
        }
        else{
            screenValue+=buttonText;
            screen.value = screenValue;
        }
    })
}