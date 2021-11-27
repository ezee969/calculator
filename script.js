var add = function (a,b){
    return a+b
}; 

var substract = function (a,b){
    return a-b 
};

var multiply = function (a,b){
    return a*b
};

var divide = function (a,b){
    return a/b
};

const operator = function (operator,a,b){
    if (operator == "+"){
        add(a,b)
    }
    else if (operator == "-"){
        substract(a,b)
    }
    else if (operator == "*"){
        multiply(a,b)
    }
    else if (operator == "/"){
        divide(a,b)
    };
};

window.addEventListener("keyup",(e)=>{
    console.log(e.keyCode);
    var selectBut = document.querySelector(`button[data-key="${e.keyCode}"]`);
    selectBut.classList.add('active');
    selectBut.click();
});

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('active');
}

const keys = document.querySelectorAll('button');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


var display = document.querySelector("#headerContainer");
var withPoint = false

var getNumButs = document.querySelectorAll(".numBut");
getNumButs.forEach(function(elem){
    elem.onclick = function(){
        addNum = elem.innerHTML
        if (withPoint==true){
            addNum = "." + elem.innerHTML
        }; 
        if ((display.innerHTML).length<15){
            if (display.innerHTML!="0" || (display.innerHTML=="0" && withPoint==true)){
                display.innerHTML+=addNum
            }
            else {
                display.innerHTML=addNum
            };
            withPoint=false;
        };
    };
});

var getClearBut = document.querySelector("#clearBut");
getClearBut.onclick = function(){
    display.innerHTML="0"
};

var getEraseBut= document.querySelector("#eraseBut");
getEraseBut.onclick = function(){
    display.innerHTML=(display.innerHTML).substring(0, (display.innerHTML).length - 1);
    if ((display.innerHTML).length<"1"){
        display.innerHTML=0
    };
}

var getPointBut= document.querySelector("#pointBut")
getPointBut.onclick = function(){
    if ((display.innerHTML)[(display.innerHTML).length - 1]!="."){
        withPoint = true
    };
};