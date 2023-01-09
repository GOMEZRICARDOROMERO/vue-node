<template>
<div id="app"> <!--todo en un div  -->
    <h1 class="text-center titulo">{{bienvenida}}</h1> <!-- titulo -->
    <br> <br>
    <div class="d-flex justify-content-around w-25 mx-auto ">
      <router-link to="/falta">
        <button type="button" class="btn btn-outline-primary">Alta</button>
      </router-link>
      <router-link to="/fbaja">
        <button type="button" class="btn btn-outline-success">Baja</button>
      </router-link>
      <router-link to="/fmodi">
        <button type="button" class="btn btn-outline-info">Modificacion</button>
      </router-link>
    </div> <br> <br>
    <router-view/>
    <!-- componentes -->

    <!-- componentes -->
</div>
</template>

<script>
// imports de los componentes

// imports de los componentes

export default {
name: 'App',
components: {
    //nombre de los componenetes que se usan

    //nombre de los componenetes que se usan
},
data() {
    return {
      //array de objeros 

      //variables de data
    bienvenida: "Entregable #7 Formulario + Vuex"

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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>