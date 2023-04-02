var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');

for(item of btn){

    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;
        if(btntext=='x'){

            btntext='*'
        }
        
        if(btntext=='÷'){
            btntext='/'
        }
        if(btntext=='+'){

            btntext='+'
        }
        if(btntext=='-'){

            btntext='-'
        }
        screen.value+=btntext;
    })
}

function backspc(){
    screen.value=screen.value.substr(0,screen.value.length-1)

}

function sqrt(){
    screen.value=screen.value/=btntext;math.sqrt(screen.value,2);
}
function pow(){
    screen.value=screen.value*=btntext;math.pow(screen.value,2);
}

function negative(){
     screen.value= '-' ;
}

// function calculate(){
//     var splitScreen = screen.value.split('%',2);
//     if(splitScreen.length > 1){
//         screen.value=eval(splitScreen[0] + '/100*' + splitScreen[1]);
//     }else{
//         screen.value=eval(screen.value);
//     }
// }


