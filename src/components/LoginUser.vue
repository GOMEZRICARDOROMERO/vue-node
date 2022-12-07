<!--Loggin usuarios  -->
<template>
  <div>
  <h1>Inicia Sesion</h1>
    <section class="signuplogin"> <!-- form -->
        <div class="signuplogin__contenedor">
          <div>
            <label>Usuario:</label><!-- muestra la palabra antes del input -->
            <input class="signuplogin__input " placeholder="Richard"> <!-- son campos para escribir como nombre email etc -->
          </div>
          
          <div>
            <label>Contraseña:</label>
            <input class="signuplogin__input " type="password" placeholder="1234"> 
          </div>
          
          <div>
            <input class="signuplogin__boton signuplogin__input" type="reset" value="Login"> 
          </div>
        </div>
    </section> <!-- form -->
  </div>
</template>

<script>
export default {
  name: "LoginUser",
  created() {

  },
  data() {
    return {

    };
  },
  props: {

  },
  methods: {

  },
};
</script>

<style scoped>
.signuplogin {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center; 
  }

.signuplogin__contenedor {
    background-color: #1d1d1b;
    padding: 10px;
    /* relleno de 10px */
    width: 400px;
    /* ancho */
    height: 250px;
    /* alto */
    border-radius: 16px;
    /* borde redondo */
    border: 3px solid #1d1d1b;
    /* borde de color */
    color: white;
    /* color del texto */
    font-size: larger;
    /* tamaño texto */ 
  }

.signuplogin__contenedor div {
      margin: 8px 0px; 
  }

.signuplogin__input {
    width: 100%;
    /* dejo que use el 100% del ancho */
    border-radius: 5px; 
  }

.signuplogin__boton {
    width: 40%;
    /* le doy un tamaño de 50% */
    display: inline;
    /* paso a bloque para centrar */
    margin: 5% auto;
    /* centro */
    border-radius: 5px;
    /* redondeo un poco */ 
  }

.signuplogin__boton:hover {
    /* aplico un tranform y transition a los botones del form */
    transform: scale(1.1, 1.1);
    /* hago escala a 1.10 de su tamaño original */
    transition: all 0.1s; 
  }

</style>