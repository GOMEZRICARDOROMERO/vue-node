<template>
  <div>
  <br>
  <UsuariosRegistrados/>
  <br>
    <h1>Baja</h1>
    <section class="formulario">
        <form action="" id="formulario2" @submit.prevent="baja">
            <div class="formulario__contenedor2">
              <div>
                <label>ID:</label><!-- muestra la palabra antes del input -->
                <input v-model.number="bid" class="formulario__input " type="number" placeholder="22"> <!-- son campos para escribir como nombre email etc -->
              </div>
              
              <div>
                <input class="formulario__boton formulario__input btn btn-secondary" type="reset" value="Cancelar"> <!-- resetea lo escrito -->
                <input class="formulario__boton formulario__input btn btn-success" type="submit" value="Finalizar"> <!-- PARA enviar submit, se deja en reset para que no cuelgue la pagina -->
              </div>
            </div>
        </form>
    </section>
    <br><br>
  </div>
</template>

<script>
import UsuariosRegistrados from "./UsuariosRegistrados.vue"
import axios from 'axios'
import {mapActions} from 'vuex'


export default {
  name: "FormularioEntregableDos",
  created() {},
  components:{
    UsuariosRegistrados
  },
  data() {
    return {
      bid: ""
    };
  },
  props: {},
  methods: {
    ...mapActions(['getApi']),
    baja(){
      if (this.bid > 0) {
        const URLD ="https://639dfe161ec9c6657bb75ebf.mockapi.io/usuarios/"+this.bid;
        const respuesta = axios.delete(URLD)
        setTimeout(() => { //reseta el formulario y variables en 0 segundos
        document.getElementById("formulario2").reset();
        //this.usuario = "", this.password = "";
        this.bid = "";
        console.log(respuesta)
        alert("Usuario/a borrado/a ")
        }, 0);
        setTimeout(() => {
          this.getApi();
        }, 1500);
        return true;
      }
      if (this.bid <=0) {
        alert("Error el id debe ser mayor a 0")
      }
    }
  },
};
</script>

<style  scoped>
.formulario {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center; 
  }

.formulario__contenedor {
    background-color: #343bc3;
    padding: 10px;
    /* relleno de 10px */
    width: 400px;
    /* ancho */
    height: 450px;
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

.formulario__contenedor2 {
    background-color: #343bc3;
    padding: 10px;
    /* relleno de 10px */
    width: 400px;
    /* ancho */
    height: 150px;
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

.formulario__contenedor div {
      margin: 8px 0px; 
  }

.formulario__input {
    width: 100%;
    /* dejo que use el 100% del ancho */
    border-radius: 5px; 
  }

.formulario__boton {
    width: 40%;
    /* le doy un tamaño de 50% */
    display: inline;
    /* paso a bloque para centrar */
    margin: 5% auto;
    /* centro */
    border-radius: 5px;
    /* redondeo un poco */ 
  }

.formulario__boton:hover {
    /* aplico un tranform y transition a los botones del form */
    transform: scale(1.1, 1.1);
    /* hago escala a 1.10 de su tamaño original */
    transition: all 0.1s; 
  }

</style>