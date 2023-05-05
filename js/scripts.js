const desc = document.querySelector("#Torneio");

console.log(desc);


const texto = "Vasco;Rio de Janeiro"+"\n" +
"Flamengo;Rio de Janeiro;"+ "\n" + 
"Palmeiras;São Paulo; "+ "\n"+
"Santos;São Paulo; " + "\n" + 
"Cruzeiro;Minas Gerais;" + "\n" +
"Internacional;Rio Grande do Sul";

document.getElementById("Area").value = texto;


const cidades = ["Rio de Janeiro", "São Paulo", "Minas Gerais"];
const equipes = ["Vasco", "Flamengo", "Palmeiras", "Cruzeiro", "Santos", "Internacional"];
const rodadas = ["Rodada 1", "Rodada 2","Rodada 3"];



  for (let i = 0; i < equipes.length; i++){
    for (let j = i+1 ; j < equipes.length; j++){
    for (let k=0; k < cidades.length; k++){
    for (let l= 0; l< rodadas.length; l++)

      // Verificação para que não aconteça de repetir os times

      if( i != j){
        document.getElementById("result").value = equipes [Math.floor(Math.random()* equipes.length)] + " vs " + 
        equipes [Math.floor(Math.random() * equipes.length)] + "\n" +
        "Cidade: " + cidades [Math.floor(Math.random() * cidades.length)]  + "\n" + 
        (rodadas[Math.floor(Math.random() * rodadas.length)]);
      }else{
        break;
      } 
    }
  }
}