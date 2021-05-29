function inserir(i){
   const x = document.querySelector('.resultado').innerHTML;
   document.querySelector('.resultado').innerHTML = x + i;
}

function limpar(){
    document.querySelector('.resultado').innerHTML = '';
}

function back(){
    const result = document.querySelector('.resultado').innerHTML;
    document.querySelector('.resultado').innerHTML = result.substring(0, result.length-1);
}
function calcResult(){
    const result = document.querySelector('.resultado').innerHTML;
    if(result){
        document.querySelector('.resultado').innerHTML = eval(result);
    }else{
        document.querySelector('.resultado').innerHTML = '';
    }
}