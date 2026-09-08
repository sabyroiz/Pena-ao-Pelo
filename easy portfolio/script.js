let ovos = 0;
let ovosPorClique = 1;

const galinha = document.getElementById("galinha");
const contador = document.getElementById("ovos");
const mostrarPorClique = document.getElementById("porClique");
const mostrarTempo = document.getElementById("tempo");

galinha.onclick = function() {
    ovos = ovos + ovosPorClique;
    contador.textContent = ovos;
    mostrarPorClique.textContent = ovosPorClique;
};

const upgradeClique = document.getElementById("upgradeClique");
const precoClique = document.getElementById("precoClique");

let custoClique = 10;
 
upgradeClique.onclick = function() {
  if(ovos >= custoClique) {
    ovos = ovos - custoClique;
    ovosPorClique = ovosPorClique + 1;
    custoClique = custoClique + 10;
    contador.textContent =  ovos;
    mostrarPorClique.textContent = ovosPorClique;
    precoClique.textContent = custoClique;
  }

};

const upgradeAutomatico = document.getElementById("upgradeAutomatico");
const precoAutomatico = document.getElementById("precoAutomatico");


let ovosPorSegundo = 0;
let custoAutomatico = 25;
let tempoAutomatico = 30;
let tempoRestante =0;
let automaticoAtivo = false;

upgradeAutomatico.onclick = function() {
  if(ovos >= custoAutomatico) {
     ovos = ovos - custoAutomatico;
     ovosPorSegundo = 1;
     tempoRestante = tempoRestante + tempoAutomatico;
     automaticoAtivo = true;
     custoAutomatico = custoAutomatico + 25;
     tempoAutomatico = tempoAutomatico + 30;
     contador.textContent = ovos; 
     precoAutomatico.textContent = custoAutomatico;
     }
   
};
 
setInterval(function() {
   if(automaticoAtivo) {
      tempoRestante--;

      mostrarTempo.textContent = tempoRestante;
   
    if(tempoRestante <= 0) {
       tempoRestante = 0;
       automaticoAtivo = false;
       ovosPorSegundo= 0;
      
      mostrarTempo.textContent = 0;
    }
   }

},1000);

setInterval(function(){
    if(automaticoAtivo) {
       ovos = ovos + ovosPorSegundo;
       contador.textContent = ovos;
      }

    },1000);

const comprarGato = document.getElementById("comprarGato");
const precoGato = document.getElementById("precoGato");

const gatoArea = document.getElementById("gatoArea");
const rato = document.getElementById("rato");
const ratosPegos = document.getElementById("ratosPegos");

let gatos = 0;
let custoGato = 100;
let ratos = 0;

comprarGato.onclick = function() {

    if (ovos >= custoGato) {

        ovos = ovos - custoGato;

        gatos = gatos + 1;

        gatoArea.style.display = "block";

        custoGato = custoGato + 100;

        contador.textContent = ovos;
        precoGato.textContent = custoGato;
    }

};

setInterval(function() {

    if (gatos > 0 && Math.random() < 0.4) {

        rato.style.display = "block";

        const x = Math.random() * 75 + 10;
        const y = Math.random() * 65 + 15;

        rato.style.left = x + "%";
        rato.style.top = y + "%";

    }

}, 5000);

rato.onclick = function() {

    if (gatos > 0) {

        ratos = ratos + 1;

        ratosPegos.textContent = ratos;

        ovos = ovos + 10;

        contador.textContent = ovos;

        rato.style.display = "none";

    }

};