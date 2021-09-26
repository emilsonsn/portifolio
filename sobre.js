let cards = document.getElementsByClassName('card')

setTimeout(() => {
    for (let i = 0; i<5;i++){
        cards[i].style.transformStyle = 'translateX(100px);'
    }
}, 1000);
    
