function requisitarPagina(endereco){
    if(!document.getElementById('loading')){
        let main = document.getElementById('main-right');
        let loading = document.createElement('img');
        loading.src = 'imagens/loading/loading.gif';
        loading.setAttribute('id','loading');
        main.appendChild(loading);
        setTimeout(() => {
            main.removeChild(loading);
            mudarIframe(endereco)
        }, 400);
    }
}

function mudarIframe(endereco){
    console.log(endereco)
    let iframe = document.getElementById('iframe-main')
    iframe.src = endereco
}




