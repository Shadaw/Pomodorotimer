let x = '';
let minutosDezena = 2; 
let minutosUnidade = 4; 
let segundosDezena = 5;
let segundosUnidade = 9; 

let  startPomodoro = () => {
    document.getElementById('btnIniciar').style.background = "#a23e2c"
    document.getElementById('btnPausar').style.cursor = "pointer"
    document.getElementById('btnPausar').style.background = "tomato"
    document.getElementById('btnIniciar').style.cursor = "context-menu";
    document.getElementById('btnIniciar').disabled = true;
    document.getElementById('btnPausar').disabled = false;
        
    // impressao do tempo na tela
    minutoDezana.innerText = minutosDezena;
    minutoUnidade.innerText = minutosUnidade;
    segundoDezena.innerText = segundosDezena;
    segundoUnidade.innerText = segundosUnidade;
   
    //funçao para subtair os segundos, e fazer as contagens
    if((segundosUnidade - 1) > -2) {
        segundosUnidade -= 1;           
        x = setTimeout('startPomodoro();', 1000);
    }

    // quando acabar todo o tempo.        
    if(minutosUnidade == 0 && minutosDezena == 0 && segundosDezena == 0 && segundosUnidade == -1) {
        clearTimeout(x);
        alert('Acabou seu pomodoro');
    }
        
    // funçao para subtrair as dezenas de Minutos, e adicionar unidades de Minutos [quando acabar todas as unidades de Minuto]
    if(minutosUnidade == 0 && segundosDezena == 0 && segundosUnidade == -1 ) {
        minutosUnidade += 10;
        minutosDezena -= 1;
    }
        
    //funçao para subtrair as unidades de Minutos, e adicionar dezenas de Segundos  [quando acabar todas as dezenas de Segundo]
    if(segundosDezena == 0 && segundosUnidade == -1) {
        segundosDezena += 5; 
        segundosUnidade += 10;
        minutosUnidade -= 1;
    }
        
    //funçao para subrair os as dezenas de segundos, e adicionar unidades de Segundos [quando acabar todas a unidades de Segundo]
    if(segundosUnidade == -1 && segundosDezena > 0 ) {
        segundosDezena -= 1;
        segundosUnidade += 10;
    }
}

    
let pausar = () => {
    clearTimeout(x);
    document.getElementById('btnIniciar').style.cursor = "pointer"
    document.getElementById('btnPausar').style.cursor = "context-menu"; 
    document.getElementById('btnPausar').style.background = "#a23e2c" 
    document.getElementById('btnIniciar').style.background = "tomato"   
    document.getElementById('btnPausar').disabled = true;   
    document.getElementById('btnIniciar').disabled = false;  
}