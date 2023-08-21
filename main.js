// diaplay btn content in input box
function display(content){
     result.value += content
}
function resetResult(){
    result.value=""
}
function experEval(){
    try{
        result.value=eval(result.value)
    }
    catch{
        result.value="Inavlid Expression!!"
 
    }
}
function removeLast(){
    result.value=result.value.slice(0,-1)
}