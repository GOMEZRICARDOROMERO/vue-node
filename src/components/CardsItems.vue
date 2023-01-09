<!--LAs cartas/ productos  -->
<template>
  <div>
  <h1>Skins Disponinbles</h1>
  <section class="imagenes">
    <article class="imagenes__card" v-for="(skin, index) in arrayskins" :key="index"> 
                <img class="imagenes__cuadro" :src="skin.imgurl" :alt="skin.titulo">
                <div class="imagenes__textos text-center">
                    <h6>ID: {{skin.id}}</h6>
                    <h2>{{skin.titulo}}</h2>
                    <p class="text-center mt-2">$ {{skin.precio}}</p>
                    <button type="button" class="btn btn-outline-success" @click="agregarProductosAlCarrito(skin.titulo,skin.precio)">Add 🛒</button>
                </div>  
    </article>
  </section>
  <!-- componentes -->

  <!-- componentes -->
  </div>
</template>

<script>
// imports 

import axios from 'axios' //importo la libreria de axios
import {mapMutations} from 'vuex'
// imports 

export default {
  name: "CardsItems",
  created() {
/*     //traigo los datos desde mockapi con fetch
    const URL ="https://639dfe161ec9c6657bb75ebf.mockapi.io/skins";
    fetch(URL) //le paso la url
            .then(response => response.json()) // traigo la respuesta y la convierte en formato de objeto
            .then(data => { //los datos convertidos los llamo data 
                this.arrayskins = data; // le paso a mi array los datos de data
                console.log(this.arrayskins); // imprimo para comprobar
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    //traigo los datos desde mockapi con fetch */
    
    
    //traigo los datos desde mockapi con axios
    const URL ="https://639dfe161ec9c6657bb75ebf.mockapi.io/skins";
    axios.get(URL)
        .then((response) => {
          this.arrayskins = response.data;
        })
        .catch((error) => {
          console.log(error)
        })
    //traigo los datos desde mockapi con axios
  },
  components: {

  },
  data() {
    return {
      productosCarrito:[],//array de objetos carrito vacio
      arrayskins:[] // este array se llena con mockapi
    };
  },
  props: {
  
  },
  methods: {
    ...mapMutations(['carritoPush']),
    agregarProductosAlCarrito(titulos,precios){
      //crea un objeto literal con los datos
      const newProd = {
        titulo: titulos,
        precio: precios
        }
      //store
      this.carritoPush(newProd)
      console.log(newProd,"agregado ");
      alert("Skin "+newProd.titulo+" Agregada")
    }
  },
};
</script>

<style  scoped>
.imagenes {
  display: flex;
  /* paso toda la section de imagenes a felx */
  justify-content: space-around;
  /* ajusto el contenido con espacios iguales entre ellos*/
  flex-wrap: wrap;
  /* dejo fluir en varias lineas los divs dependiendo el ancho de la pantalla */ 
  }

.imagenes h2 {
    /* titulo dentro de la tarjeta */
    text-align: center;
    /* centro el titulo del juego */
    margin-bottom: 2%;
    /* separo un 2 el titulo del texto */ 
  }

.imagenes__card {
    /* es el diseño de la tarjeta */
    display: flex;
    /* paso todos los articulos a flex */
    flex-direction: column;
    /* los paso a vertical */
    width: 400px;
    /* ancho */
    height: 420px;
    /* alto */
    border-radius: 16px;
    /* borde redondo */
    border: 3px solid #1d1d1b;
    /* borde de color */
    margin: 1%; 
  }

.imagenes__cuadro {
    /* es el tamaño que se va usar para la imagen */
    width: 100%;
    /* ocupa el 100% de ancho */
    height: 280px;
    /* 250px de alto */
    border-top-left-radius: 13px 13px;
    /* hago redondo el borde arriba izquierda para coincidir con el de article */
    border-top-right-radius: 13px 13px;
    /* hago redondo el borde arriba derecha para coincidir con el de article */ 
  }

.imagenes__textos {
    /* son los textos dentro de la tarjeta */
    text-align: justify;
    /* centro el texto */
    line-height: 1.2;
    /* separo los renglones */
    margin: 3%;
    /* separo en todos los lados 1% */ 
  }

h6{
  font-size: 10px
}

</style>