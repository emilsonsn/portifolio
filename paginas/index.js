function requisitarPagina(endereco){
    mudarAtivado(endereco)
    if(!document.getElementById('loading')){
        let main = document.getElementById('main-right');
        let loading = document.createElement('img');
        loading.src = '../../imagens/gifs/loading.gif';
        loading.setAttribute('id','loading');
        main.appendChild(loading);
        setTimeout(() => {
            main.removeChild(loading);
            mudarIframe(endereco)
        }, 300);
    }
}
function mudarIframe(endereco){
    console.log(endereco)
    let iframe = document.getElementById('iframe-main')
    iframe.src = endereco
}
function mudarAtivado(endereco){
    if(endereco == "home/home.html"){
        document.getElementById('home').classList.add('actived')
        document.getElementById('sobre').classList.remove('actived')
        document.getElementById('projeto').classList.remove('actived')
        document.getElementById('experiencia').classList.remove('actived')
    }
    else if(endereco == "./sobre/sobre.html"){
        document.getElementById('home').classList.remove('actived')
        document.getElementById('sobre').classList.add('actived')
        document.getElementById('projeto').classList.remove('actived')
        document.getElementById('experiencia').classList.remove('actived')
        console.log("entrei");
    }
    else if(endereco == "./experiencia/experiencia.html"){
        document.getElementById('home').classList.remove('actived')
        document.getElementById('sobre').classList.remove('actived')
        document.getElementById('projeto').classList.remove('actived')
        document.getElementById('experiencia').classList.add('actived')
    }
    else if(endereco == "./projetos/projetos.html"){
        document.getElementById('home').classList.remove('actived')
        document.getElementById('sobre').classList.remove('actived')
        document.getElementById('projeto').classList.add('actived')
        document.getElementById('experiencia').classList.remove('actived')
    }
}



