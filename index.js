let string = "";
let input = document.querySelector('input');
const allButtons= document.querySelectorAll('.numbers');

Array.from(allButtons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "X"){
            string = string + "*";
        }
        else if(e.target.innerHTML == "="){
            string = eval(string);
            input.value= string;
        }
        else if(e.target.innerHTML == "C"){
            string = ""
            input.value= string;
        }
        else if(e.target.innerHTML == "R"){
            string = string.slice(0, -1);
            console.log(string);
            input.value= string;
        }
        else
        string = string + e.target.innerHTML;
        input.value = string;
    });
});