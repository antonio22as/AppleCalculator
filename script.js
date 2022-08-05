

let a = ''; //first Number
let b = ''; //second Number
let sign = ''; //sign
let finish = false;


let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "." ];
let signs = ["ac", "+", "+/-", "%", "-", "X", "/", "="];

let out = document.querySelector(".output_result");

function clearScreen(){
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.innerText = "0"
};

document.querySelector(".ac").onclick = clearScreen;

for (let i=0; i<document.querySelectorAll(".btn").length; i++){
    let item = document.querySelectorAll(".btn")[i];
    
    item.addEventListener("click", () => {
        const key = item.innerText;
        if(out.innerText.length>=5){
            out.style.fontSize = "50px"
        }
        if(out.innerText.length>=10){
            out.style.fontSize = "23px"
        }
        if(out.innerText.length>20){
            out.style.fontSize = "80px"
            clearScreen();
        }
        
        
        
        if(digits.includes(key)){
            if(b=="" && sign==""){
                a += key;
                out.innerText = a;
            } else if(a!="" && sign!=""){
                b += key;
                out.innerText = b;
            } else if(a!="" && b=="" && finish){
                b+=key;
                finish = false;
                out.innerText = b;
            }
        }
        
        if(key=="="){
            switch (sign) {
                case '+':
                    a = (+a) + (+b)
                    break;
                case '-':
                    a = (+a) - (+b)
                    break;
                case 'X':
                    a = (+a) * (+b)
                    break;
                case '/':
                    a = (+a) / (+b)
                    break;
                case '%':
                    a = ((+a)/100)*(+b)
                    break;
                default:
                    out.innerText = "functions are not ready yet..."
            }
            console.log(a, b, sign)
            finish = true;
            b="";
            out.innerText = a;
        }
        
        if(signs.includes(key)){
            if(key=="=") return;
            sign=key;
            out.innerText = sign;
        }
    })
}