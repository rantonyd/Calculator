function displayNumber(num){
    // let resultbox=document.querySelector("#id_result")
    // resultbox.value+=num
    id_result.value+=num
    
}

// clear
function clearBox(){
    // first empty the textbox, the first process is to select text box usin id then set the value is  null
    id_result.value=""
}

// evaluate 
function evaluateExpression(){
    let currentexpression=id_result.value
    let out=eval(currentexpression)
    id_result.value=out
}

function backSpace(){
    let currentValue=id_result.value
    let out=currentValue.slice(0,-1)
    id_result.value=out
}