<template>
  <div>
  <br>
  <UsuariosRegistrados/>
  <br>
  <h1>Alta</h1>
    <section class="formulario">
        <form action="" id="formulario" @submit.prevent="singup">
            <div class="formulario__contenedor">
              <div>
                <label>Usuario:</label><!-- muestra la palabra antes del input -->
                <input v-model="ausuario" class="formulario__input " placeholder="Richard"> <!-- son campos para escribir como nombre email etc -->
              </div>
              
              <div>
                <label>Email:</label>
                <input v-model="aemail" class="formulario__input " type="email" placeholder="Richard@"> 
              </div>
              
              <div>
                <label>Contraseña:</label>
                <input v-model="apassword" class="formulario__input " type="password" placeholder="1234"> 
              </div>
              
              <div>
                <label>Confirmar Contraseña:</label>
                <input v-model="acpassword" class="formulario__input " type="password" placeholder="1234"> 
              </div>
              
              <div>
                <h5>Rol de usuario</h5>
              </div>
              <div>
                  <input v-model="arol" type="radio" class="form-check-input" value="admin">
                  <label>Admin &nbsp;</label>
                  <input v-model="arol" type="radio" class="form-check-input" value="user">
                  <label>User </label>
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
  name: "FormularioEntregableUno",
  created() {
    
  },
  components:{
    UsuariosRegistrados
  },
  data() {
    return {
      ausuario:"",
      aemail:"",
      apassword:"",
      acpassword:"",
      arol:"",
    };
  },
  props: {},
  methods: {
    ...mapActions(['getApi']),
    singup(){
      //validaciones
      if (this.ausuario && this.aemail  && this.apassword && this.acpassword == this.apassword && this.arol) {
        alert("Usuario agregado")
        //llamo al metodo que agrega los usuarios a mockapi con axios
        this.axiosUpost()
        setTimeout(() => { //reseta el formulario y variables en 0 segundos
        document.getElementById("formulario").reset();
        //this.usuario = "", this.password = "";
        this.ausuario = "", this.aemail = "", this.apassword = "", this.acpassword = "", this.apassword = "", this.arol = "";// esto borra todo incluyendo el array 
        }, 0);
        return true; // con true no entra a las demas validaciones
      }
      if (!this.ausuario && !this.aemail && !this.apassword && !this.acpassword && !this.arol) {
        alert("Error faltan todos los campos")
        return true;
      }
      if (!this.ausuario) {
        alert("Error falta usuario")
      }
      if (!this.aemail) {
        alert("Error falta email")
      }
      if (!this.apassword) {
        alert("Error falta password")
      }
      if (!this.acpassword) {
        alert("Error falta confirmar password")
      }
      if (this.acpassword != this.apassword) {
        alert("Error la contraeña no coincide")
      }
      if (!this.arol) {
        alert("Error falta seleccionar el rol")
      }
    },
    axiosUpost(){
      //creo el objeto a enviar
      const nuevoUser={
        usuario: this.ausuario,
        email: this.aemail,
        password: this.apassword,
        rol: this.arol
      }
      //url a la cual enviar
      const URLUP ="https://639dfe161ec9c6657bb75ebf.mockapi.io/usuarios";
      //le indico la url y el objeto que se va postear y listo
      axios.post(URLUP,nuevoUser)
      setTimeout(() => {
        this.getApi();
      }, 1500);
    },
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