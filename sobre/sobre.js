let sobre = document.getElementById('sobre')
setTimeout(() => {
    sobre.style.width = "90%"
    if(sobre.style.height < 600){
        abrir()
    }
}, 100);

function abrir (){
    setTimeout(() => {
        sobre.style.transition = "all 10s"
        sobre.style.height = "1600px"
        expandirTotal()
    }, 100);
}
function expandirTotal(){
    setTimeout(() => {
        sobre.style.height = "100%"
    }, 3000);
}


