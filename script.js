const blocos = document.querySelectorAll('.bloco');
const bloco1 = document.querySelector('#b1');
const bloco2 = document.querySelector('#b2');
const bloco3 = document.querySelector('#b3');
const bloco4 = document.querySelector('#b4');
const bloco5 = document.querySelector('#b5');
const bloco6 = document.querySelector('#b6');
const bloco7 = document.querySelector('#b7');
const bloco8 = document.querySelector('#b8');
const bloco9 = document.querySelector('#b9');
const resultado = document.querySelector("#resultado");
let contaCliques = 0;

function clicar(event) {
    
    if (event.target.innerHTML == "") {
        if (contaCliques % 2 === 0) {
            event.target.innerHTML = "X";
           
        }
        else if (contaCliques % 2 === 1) {
            event.target.innerHTML = "O";
        
        }
        contaCliques++;
        verificar (event.target.innerHTML);
    }
}

function verificar(quem) {
    
    if ((bloco1.innerHTML == bloco2.innerHTML && bloco2.innerHTML == bloco3.innerHTML && bloco1.innerHTML !=="") || (bloco4.innerHTML == bloco5.innerHTML && bloco5.innerHTML == bloco6.innerHTML&& bloco6.innerHTML !=="") || (bloco7.innerHTML == bloco8.innerHTML && bloco8.innerHTML == bloco9.innerHTML && bloco9.innerHTML !=="") || (bloco1.innerHTML == bloco4.innerHTML && bloco4.innerHTML == bloco7.innerHTML && bloco7.innerHTML !=="") || (bloco2.innerHTML == bloco5.innerHTML && bloco5.innerHTML == bloco8.innerHTML && bloco8.innerHTML !=="") || (bloco3.innerHTML == bloco6.innerHTML && bloco6.innerHTML == bloco9.innerHTML && bloco9.innerHTML !=="") ||
    (bloco3.innerHTML == bloco5.innerHTML && bloco5.innerHTML == bloco7.innerHTML && bloco7.innerHTML !=="") || (bloco1.innerHTML == bloco5.innerHTML && bloco5.innerHTML == bloco9.innerHTML && bloco9.innerHTML !=="")) {
        resultado.innerHTML = `${quem} ganhou!` ;
        
    }       
    else if (contaCliques == 9) {
        resultado.innerHTML = `Deu velha`;
    }
}

// (resultado.innerHTML.search == resultado||
for (let bloco of blocos) {
    bloco.onclick = clicar;
}

