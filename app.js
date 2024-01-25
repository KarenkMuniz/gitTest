const SAIDA = document.getElementById('ipnegado');
const BTN = document.getElementById('btn');
let input = document.getElementById('ips');
const REGEX = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})(\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})){3}$/;
const PRIMEIRA_SAIDA = document.getElementById('numbin1');
const SEGUNDA_SAIDA = document.getElementById('numbin2');
const TERCEIRA_SAIDA = document.getElementById('numbin3');
const QUARTA_SAIDA = document.getElementById('numbin4');
let ENTRADA;
let NUM_SEPARADO;
let FINALREAL;   
const BASE = [128,64,32,16,8,4,2,1];

input.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        event.preventDefault();
         BTN.click();
    }
});

function cleanAndStart(){   
    SAIDA.innerHTML = '';
    PRIMEIRA_SAIDA.innerHTML = '';
    SEGUNDA_SAIDA.innerHTML = '';
    TERCEIRA_SAIDA.innerHTML = '';
    QUARTA_SAIDA.innerHTML = '';
    separarnumero();
};

function separarnumero(){
    ENTRADA = document.getElementById('ips').value;
    NUM_SEPARADO = ENTRADA.split(".");
    REGEX.test(ENTRADA) ? converter() : SAIDA.innerHTML = 'Valor inserido não é IPV4'; 
};

function converter(){
        
        for (let i = 0; i <= NUM_SEPARADO.length; i++){
        let finalTemp;
        let valoratual = parseInt(NUM_SEPARADO[i]);
        let binarioBloco = [];
        
            for(let j = 0; j <BASE.length; j++){
            if (valoratual >= BASE[j]){
                valoratual = valoratual - BASE[j];
                binarioBloco.push('1');
            } else {
                binarioBloco.push('0');
            }
            finalTemp = binarioBloco.join('');

            switch(i){
                case 0:
                PRIMEIRA_SAIDA.innerHTML = finalTemp;
                break;

                case 1:
                SEGUNDA_SAIDA.innerHTML = finalTemp;
                break;

                case 2:
                TERCEIRA_SAIDA.innerHTML = finalTemp;
                break;

                case 3:
                QUARTA_SAIDA.innerHTML = finalTemp;
                break;
            }
            }                  
                }}
