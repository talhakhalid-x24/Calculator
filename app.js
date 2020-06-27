function getNumber(num){
    var result = document.getElementById("result");
    
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("result");

    result.value = "0";
}

function clearResult1(){
    var result = document.getElementById("result");

    result.value = "";
}

function clearOne(){
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}

function sqRoot(num){
    var result = document.getElementById("result");

    result.value = Math.sqrt(result.value);
}

function square(num){
    var result = document.getElementById("result");

    result.value = Math.pow(result.value,2);
}

function sinFunc(num){
    var result = document.getElementById("result");

    result.value = Math.sin(result.value);
}

function cosFunc(num){
    var result = document.getElementById("result");

    result.value = Math.cos(result.value);
}

function tanFunc(num){
    var result = document.getElementById("result");

    result.value = Math.tan(result.value);
}

function logFunc(num){
    var result = document.getElementById("result");

    result.value = Math.log10(result.value);
}

function lnFunc(num){
    var result = document.getElementById("result");

    result.value = Math.log(result.value);
}

function expFunc(num){
    var result = document.getElementById("result");

    result.value = Math.exp(result.value);
}

function piFunc(num){
    var result = document.getElementById("result");

    result.value += num;
}

function xModFunc(num){
    var result = document.getElementById("result");

    result.value = Math.abs(result.value);
}

function nFacFunc(num){
    var result = document.getElementById("result");
      
    num=1; 
      
    for (var i = 2; i <= result.value; i++){ 
        num = num * i;  
    }
    result.value = num;
}

function divByOne(num){
    var result = document.getElementById("result");

    result.value = 1/result.value;
}

function getResult(){
    var result = document.getElementById("result");

    result.value = eval(result.value);
}

function exitCalc(){
    document.getElementById("main").style.display = "none";

}

