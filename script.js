inputbox = document.getElementById("input")
buttons = document.querySelectorAll(".btns")

btnAry = Array.from(buttons)

btnAry.forEach(btn => {
    
    btn.addEventListener("click", (e)=>
    {
        if (e.target.innerHTML == '=') {
            inputbox.value = eval(inputbox.value)
        }
     else if (e.target.innerHTML == "DEL") {
            inputbox.value = inputbox.value.toString().slice(0,-1)
        }else if (e.target.innerHTML == "CE") {
            inputbox.value =''
        }
        else{
        console.log("button clicked")
        inputbox.value += e.target.innerHTML
    }
    })

    btn.addEventListener('keydown', (e)=>{
        if (e.key == '0' || e.key == '1' 
            || e.key == '2' || e.key == '3' 
            || e.key == '4' || e.key == '5' 
            || e.key == '6' || e.key == '7' 
            || e.key == '8' || e.key == '9' 
            || e.key == '+' || e.key == '-' 
            || e.key == '*' || e.key == '/') 
           { inputbox.value += e.key; }
    
           else if (e.key == "Enter") {
            inputbox.value = eval(inputbox.value)
        } else if (e.key == "Backspace") {
            inputbox.value = inputbox.value.toString().slice(0,-1)
        }else if (e.key == "c" || e.key =='C') {
            inputbox.value =''
        }
    })
});

