const desc = document.querySelector("#Torneio");

console.log(desc);

const str = "Vasco;Rio de Janeiro;Flamengo;Rio de Janeiro; Palmeiras;São Paulo; Santos;São Paulo; Cruzeiro;Minas Gerais; Internacional;Rio Grande do Sul"

const words = str.split(';');
console.log(words[0]);
console.log(words[1]);

//desc.addEventListener("keypress", function(e){
  // var inputLength = desc.value.length;
   //const maxChars = 50;
   

   ///if(inputLength >= maxChars)
    //e.preventDefault(); // Evita que o usuário digite mais que 20 caracteres
   //maxChars.replace(/[,!]/g, "");

