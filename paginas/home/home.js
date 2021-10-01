incrementador = 0;
    function aumentar(){
    if(document.getElementById("img-1").style.opacity <=0){
        const set = setInterval(() => {
            document.getElementById("img-1").style.opacity = incrementador
            incrementador=incrementador+0.06
            if(document.getElementById("img-1").style.opacity>=1){
                clearInterval(set);
                diminuir()
            }
        }, 50);
    }
}
    function diminuir(){
        if(document.getElementById("img-1").style.opacity >=1){
            const set = setInterval(() => {
                document.getElementById("img-1").style.opacity = incrementador
                incrementador=incrementador-0.06
                if(document.getElementById("img-1").style.opacity<=0){
                    clearInterval(set);
                    aumentar()
            }
        }, 50);
    }
}
aumentar()