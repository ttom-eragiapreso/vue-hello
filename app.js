// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Utilizzare almeno una classe CSS in modo dinamico
// Bonus:
// 1. Aggiungere alla pagina un’immagine, presa anch’essa da un data.
// 2. Cambiare dinamicamente l’immagine
// 3. Al click di un bottone nascondere l’immagine e mostrare un testo


const { createApp } = Vue;

createApp({

data(){
  return {
    messaggio: "Ciao Vue",
    testoRosso: "",
    listaImg: ["male1.png", "male2.png", "male3.png", "female1.png", "female2.png", "female3.png"],
    counter: 0,
    imgTag: "./img/",
    toggleImgText: true
  }
},

methods:{

  iterateImg(){
    this.counter < this.listaImg.length -1 ? this.counter++ : this.counter = 0;
  },

  toggleBtn(){
    this.toggleImgText = !this.toggleImgText
  }
}


}).mount("#app")