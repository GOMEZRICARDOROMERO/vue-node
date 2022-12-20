<template>
  <div id="app">
    <h1 class="text-center titulo">{{bienvenida}}</h1> <br><!-- titulo -->
    <div class="d-flex justify-content-around w-25 mx-auto ">
      <router-link to="/">
        <button type="button" class="btn btn-outline-primary">Home</button>
      </router-link>
      <router-link to="/login">
        <button type="button" class="btn btn-outline-success">Login</button>
      </router-link>
      <router-link to="/singup">
        <button type="button" class="btn btn-outline-info">Sing up</button>
      </router-link>
    </div> <br> <br>
    <router-view/>
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
    bienvenida: "Segunda Entrega Proyecto Final"

    }
},
methods: {
    
},
computed: {
    
},
}
</script>

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
