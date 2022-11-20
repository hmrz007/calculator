function display(num){
    result.value+=num

}
function equal(){
    result.value=eval(result.value)
}
function allclear(){
    result.value=''
}
function backspace(){
    result.value=result.value.slice(0,-1)
}