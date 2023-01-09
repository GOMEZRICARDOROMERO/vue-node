<template>
  <div>
  <br>
  <SkinsRegistradas/>
  <br>
  <h1>Alta</h1>
    <section class="formulario">
        <form action="" id="formulario" @submit.prevent="alta">
            <div class="formulario__contenedor">
              <div>
                <label>Titulo:</label><!-- muestra la palabra antes del input -->
                <input v-model="atitulo" class="formulario__input " placeholder="Nombre skin"> <!-- son campos para escribir como nombre email etc -->
              </div>
              
              <div>
                <label>Imgurl:</label>
                <input v-model="aimgurl" class="formulario__input " placeholder="https://ddr.jpg"> 
              </div>
              
              <div>
                <label>Precio:</label>
                <input v-model.number="aprecio" class="formulario__input " type="number" placeholder="2500"> 
              </div>
              
              <div>
                <input class="formulario__boton formulario__input btn btn-secondary" type="reset" value="Cancelar"> <!-- resetea lo escrito -->
                <input class="formulario__boton formulario__input btn btn-success" type="submit" value="Finalizar"> <!-- PARA enviar submit, se deja en reset para que no cuelgue la pagina -->
              </div>
            </div>
        </form>
    </section>
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
    <br>
    <h1>Modificacion</h1>
    <section class="formulario">
        <form action="" id="formulario3" @submit.prevent="modificacion">
            <div class="formulario__contenedor3">
              <div>
                <label>ID:</label><!-- muestra la palabra antes del input -->
                <input v-model.number="mid" class="formulario__input " type="number" placeholder="22"> <!-- son campos para escribir como nombre email etc -->
              </div>
              
              <div>
                <label>Titulo:</label><!-- muestra la palabra antes del input -->
                <input v-model="mtitulo" class="formulario__input " placeholder="Nombre skin"> <!-- son campos para escribir como nombre email etc -->
              </div>
              
              <div>
                <label>Imgurl:</label>
                <input v-model="mimgurl" class="formulario__input " placeholder="https://ddr.jpg"> 
              </div>
              
              <div>
                <label>Precio:</label>
                <input v-model.number="mprecio" class="formulario__input " type="number" placeholder="2500"> 
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
import SkinsRegistradas from "./SkinsRegistradas.vue"
import axios from 'axios'
import {mapActions} from 'vuex'

export default {
  name: "AbmStore",
  created() {

  },
  components:{
    SkinsRegistradas
  },
  data() {
    return {
      mid: "",
      mtitulo: "",
      mimgurl: "",
      mprecio: "",
      bid: "",
      atitulo: "",
      aimgurl: "",
      aprecio: ""
    };
  },
  props: {

  },
  methods: {
    ...mapActions(['getApiDos']),
    alta(){
      //validaciones
      if (this.atitulo && this.aimgurl  && this.aprecio >0) {
        alert("Skin agregada")
        //llamo al metodo que agrega los usuarios a mockapi con axios
        this.axiospost()
        setTimeout(() => { //reseta el formulario y variables en 0 segundos
        document.getElementById("formulario").reset();
        //this.usuario = "", this.password = "";
        Object.assign(this.$data, this.$options.data()); // esto borra todo incluyendo el array 
        }, 0);
        return true; // con true no entra a las demas validaciones
      }
      if (!this.atitulo && !this.aimgurl  && this.aprecio <= 0) {
        alert("Error faltan todos los campos")
        return true;
      }
      if (!this.atitulo) {
        alert("Error falta titulo")
      }
      if (!this.aimgurl) {
        alert("Error falta imgurl")
      }
      if (this.aprecio <= 0) {
        alert("Error el precio debe ser mayor a 0")
      }
    },
    axiospost(){
      //creo el objeto a enviar
      const nuevoSkin={
        titulo: this.atitulo,
        imgurl: this.aimgurl,
        precio: this.aprecio
      }
      //url a la cual enviar
      const URL ="https://639dfe161ec9c6657bb75ebf.mockapi.io/skins";
      //le indico la url y el objeto que se va postear y listo
      axios.post(URL,nuevoSkin)
      setTimeout(() => {
        this.getApiDos();
      }, 1000);
    },
    baja(){
      if (this.bid > 0) {
        const URLD ="https://639dfe161ec9c6657bb75ebf.mockapi.io/skins/"+this.bid;
        const respuesta = axios.delete(URLD)
        setTimeout(() => { //reseta el formulario y variables en 0 segundos
        document.getElementById("formulario2").reset();
        //this.usuario = "", this.password = "";
        Object.assign(this.$data, this.$options.data()); // esto borra todo incluyendo el array
        console.log(respuesta)
        alert("Skin borrada ")
        }, 0);
        setTimeout(() => {
        this.getApiDos();
      }, 1000);
        return true;
      }
      if (this.bid <=0) {
        alert("Error el id debe ser mayor a 0")
      }
    },
    modificacion(){
      //validaciones
      if (this.mid && this.mtitulo && this.mimgurl &&this.mprecio >0) {
        alert("Skin modificada")
        //llamo al metodo que agrega los usuarios a mockapi con axios
        this.axiosput()
        setTimeout(() => { //reseta el formulario y variables en 0 segundos
        document.getElementById("formulario3").reset();
        //this.usuario = "", this.password = "";
        Object.assign(this.$data, this.$options.data()); // esto borra todo incluyendo el array 
        }, 0);
        return true; // con true no entra a las demas validaciones
      }
      if (this.mid <=0 && !this.mtitulo && !this.mimgurl  && this.mprecio <= 0) {
        alert("Error faltan todos los campos")
        return true;
      }
      if (this.mid <=0) {
        alert("Error el id debe ser mayor a 0")
      }
      if (!this.mtitulo) {
        alert("Error falta titulo")
      }
      if (!this.mimgurl) {
        alert("Error falta imgurl")
      }
      if (this.mprecio <=0) {
        alert("Error el precio debe ser mayor a 0")
      }
    },
    axiosput(){
      //creo el objeto a enviar
      const modSkin={
        titulo: this.mtitulo,
        imgurl: this.mimgurl,
        precio: this.mprecio
      }
      //url a la cual enviar
      const URLM ="https://639dfe161ec9c6657bb75ebf.mockapi.io/skins/"+this.mid;
      //le indico la url y el objeto que se va postear y listo
      axios.put(URLM,modSkin)
      setTimeout(() => {
        this.getApiDos();
      }, 1000);
    }
  },
};
</script>

<style scoped>
.formulario {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center; 
  }

.formulario__contenedor {
    background-color: #1d1d1b;
    padding: 10px;
    /* relleno de 10px */
    width: 400px;
    /* ancho */
    height: 320px;
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
    background-color: #1d1d1b;
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

.formulario__contenedor3 {
    background-color: #1d1d1b;
    padding: 10px;
    /* relleno de 10px */
    width: 400px;
    /* ancho */
    height: 350px;
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