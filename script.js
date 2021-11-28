var add = function (a,b){
    
    return parseFloat(a)+parseFloat(b)
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
        res=add(a,b)
    }
    else if (operator == "-"){
        res=substract(a,b)
    }
    else if (operator == "*"){
        res=multiply(a,b)
    }
    else if (operator == "/"){
        res=divide(a,b)
    };
    return res;
};

window.addEventListener("keyup",(e)=>{
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

var withPoint = false
var withClear= false
var replace=false
var operate=false
var res =0
var firstValue=0
var secondValue=0
var op=""
var firstRound=true
var display = document.querySelector("#mainHeadCont");
var minidisplay = document.querySelector("#secHeadCont")
var firstDisplay = true;
var canShow =false;
var dummy=0

var getNumButs = document.querySelectorAll(".numBut");
getNumButs.forEach(function(elem){
    elem.onclick = function(){
        addNum = elem.innerHTML
        if (withPoint==true){
            addNum = "." + elem.innerHTML
        }; 
        if ((display.innerHTML).length<20){
            if ((display.innerHTML!="0" || (display.innerHTML=="0" && withPoint==true))&& withClear==false){
                display.innerHTML+=addNum
            }
            else if(withClear==true){
                display.innerHTML=addNum
            }
            else {
                display.innerHTML=addNum
            };
            if (operate==true){
                console.log(firstValue)
                secondValue=display.innerHTML
                res=operator(op,firstValue,secondValue)
                dummy=firstValue
                firstValue=res
                replace=true
                canShow=true
            }
            withPoint=false;
            withClear=false;
        };
    };
});

var getClearBut = document.querySelector("#clearBut");
getClearBut.onclick = function(){
    display.innerHTML="0"
    reset()
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
    if ((display.innerHTML)[(display.innerHTML).length - 1]!="." && (display.innerHTML).includes(".")==false){
        withPoint = true
    };
};

var getEqualBut=document.querySelector("#equalBut");
getEqualBut.onclick = function(){
    if(canShow==true){
        if (firstRound==false && firstDisplay==true){
            console.log("entre")
            minidisplay.innerHTML+=`${dummy}${op}${secondValue}`
            firstDisplay=false
        }
        else {
            minidisplay.innerHTML+=`${op}${secondValue}`
            firstValue=res
        };
        canShow=false
        display.innerHTML=res
        getOperatorsBut.forEach(function (e){
            e.onclick = function(){}
        });
        getNumButs.forEach(function(elem){
            elem.onclick = function(){}
        });
        getEraseBut.onclick = function(){};
    };
};

var getOperatorsBut=document.querySelectorAll(".operator");
getOperatorsBut.forEach(function (e){
    e.onclick = function(){
        if (firstRound==true){
            firstValue=display.innerHTML
            firstRound=false
        }
        else if (firstRound==false && firstDisplay==true){
            minidisplay.innerHTML+=`${dummy}${op}${secondValue}`
            firstValue=res
            firstDisplay=false
        }
        else {
            minidisplay.innerHTML+=`${op}${secondValue}`
            firstValue=res
        };
        operate=true
        withClear=true
        op=e.innerHTML
        if (replace==true){
            display.innerHTML=res
        };
    };
});

var reset = function(){
    firstRound = true
    withPoint = false
    withClear= false
    replace=false
    operate=false
    res =0
    firstValue=0
    secondValue=0
    op=""
    minidisplay.innerHTML=""
    canShow =false;
    dummy=0
    firstDisplay = true;
};

