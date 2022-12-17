<template>
  <div class="container text-center" id="app"> <!--todo en un div  -->
    <h1 class="text-center titulo">{{bienvenida}}</h1> <!-- titulo -->
    <!-- componentes -->
    <div class="tablas">
      <EntregableTres :arraycompo="arraylomitos" :colorcompo="coloruno" :titulo="lomitos"/> <!-- le paso al componente sus props -->
      <EntregableTres :arraycompo="arraymichis" :colorcompo="colordos" :titulo="michis"/>
      <EntregableTres :arraycompo="arraywonejos" :colorcompo="colortres" :titulo="wonejos"/>
    </div>
    <!-- componentes -->
  </div>
</template>

<script>
// imports de los componentes
import EntregableTres from './components/EntregableTres.vue'
// imports de los componentes

export default {
  name: 'App',
  components: {
    //nombre de los componenetes que se usan
    EntregableTres
    //nombre de los componenetes que se usan
  },
  data() {
    return {
      //array de objeros 
      arraylomitos:[
        {
          nombre: "Puma",
          razaocolor: "Labrador"
        },
        {
          nombre: "Lucky",
          razaocolor: "Criollo"
        },
        {
          nombre: "Silver",
          razaocolor: "Husky"
        }
      ],
      arraymichis:[
        {
          nombre: "Paco",
          razaocolor: "Negro"
        },
        {
          nombre: "Tito",
          razaocolor: "Blanco"
        },
        {
          nombre: "Harry",
          razaocolor: "Gris"
        }
      ],
      arraywonejos:[
        {
          nombre: "Bugs",
          razaocolor: "Gris"
        },
        {
          nombre: "Saltarin",
          razaocolor: "Blanco"
        },
        {
          nombre: "Gus",
          razaocolor: "Negro"
        }
      ],
      //variables de data
      bienvenida: "Entregable #3",
      lomitos: "Tabla de Lomitos 🐶",
      michis: "Tabla de Michis 🐱",
      wonejos: "Tabla de Wonejos 🐰",
      coloruno: "table-primary",
      colordos: "table-danger",
      colortres: "table-dark"
    }
  },
  methods: {
    
  },
  computed: {
    
  },
}
</script>

<!-- css -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.titulo{
  margin-bottom: 2%;
}

.tablas{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 30%;
    margin: auto;
}
</style>
