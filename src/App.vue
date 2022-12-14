<template>
  <div class="container text-center" id="app"> <!--todo en un div  -->
    <h1 class="text-center titulo">{{bienvenida}}</h1> <!-- titulo -->
    <!-- componentes -->
    <FormularioEntregable/>
    <!-- componentes -->
  </div>
</template>

<script>
// imports de los componentes
import FormularioEntregable from './components/FormularioEntregable.vue'
// imports de los componentes

export default {
  name: 'App',
  components: {
    //nombre de los componenetes que se usan
    FormularioEntregable
    //nombre de los componenetes que se usan
  },
  data() {
    return {
      //array de objeros 

      //variables de data
      bienvenida: "Entregable #5 Formulario"

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

</style>