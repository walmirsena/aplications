var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";

    function validarVitoria(){

        let vencedor = document.querySelector('.vencedor');

        if(playerOpt == "papel"){

            if(inimigoOpt == "papel"){
                //empate
                vencedor.innerHTML= 'EMPATE';
            }else if(inimigoOpt == 'tesoura'){
                //inimigo vence
                vencedor.innerHTML = 'ADVERSÁRIO VENCEU';
            }else if(inimigoOpt == 'pedra'){
                //player vence
                vencedor.innerHTML = 'PLAYER VENCEU';
            }
        }

        if(playerOpt == "pedra"){

            if(inimigoOpt == "papel"){
                //inimigo vence
                vencedor.innerHTML= 'ADVERSÁRIO VENCEU';
            }else if(inimigoOpt == 'tesoura'){
                //player vence
                vencedor.innerHTML = 'PLAYER VENCEU';
            }else if(inimigoOpt == 'pedra'){
                //empate
                vencedor.innerHTML = 'EMPATE';
            }
        }

        if(playerOpt == "tesoura"){

            if(inimigoOpt == "papel"){
                //player vence
                vencedor.innerHTML= 'PLAYER VENCEU';
            }else if(inimigoOpt == 'tesoura'){
                //empate
                vencedor.innerHTML = 'EMPATE';
            }else if(inimigoOpt == 'pedra'){
                //inimigo vence
                vencedor.innerHTML = 'ADVERSÁRIO VENCEU';
            }
        }
    
    
    
    }

    function resetInimigo(){
        const enemyOptions = document.querySelectorAll('.enemy-options div');
        for(var i = 0; i < enemyOptions.length; i++){
            enemyOptions[i].childNodes[0].style.opacity=0.3;
            
        }
    }

    function inimigoJogar(){
        let rand = Math.floor(Math.random()*3);

    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetInimigo();
    for(var i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity=1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }

    validarVitoria();

    
}

function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity=0.3;
        }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click',function(t){
        resetOpacityPlayer();
        t.target.style.opacity=1;
        playerOpt = t.target.getAttribute('opt');

        inimigoJogar();

    });

}