<!-- Formularios para el ABM de usuarios -->
<template>
  <div>
  <br>
  <UsuariosRegistrados/>
  <br>
  <br><br>
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
                <label>Usuario:</label><!-- muestra la palabra antes del input -->
                <input v-model="musuario" class="formulario__input " placeholder="Richard"> <!-- son campos para escribir como nombre email etc -->
              </div>
              
              <div>
                <label>Email:</label>
                <input v-model="memail" class="formulario__input " type="email" placeholder="Richard@"> 
              </div>
              
              <div>
                <label>Contraseña:</label>
                <input v-model="mpassword" class="formulario__input " type="password" placeholder="1234"> 
              </div>
              
              <div>
                <label>Confirmar Contraseña:</label>
                <input v-model="mcpassword" class="formulario__input " type="password" placeholder="1234"> 
              </div>
              
              <div>
                <h5>Rol de usuario</h5>
              </div>
              <div>
                  <input v-model="mrol" type="radio" class="form-check-input" value="admin">
                  <label>Admin &nbsp;</label>
                  <input v-model="mrol" type="radio" class="form-check-input" value="user">
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
  name: "AbmUser",
  created() {
    
  },
  components:{
    UsuariosRegistrados
  },
  data() {
    return {
      bid: "",
      usuariosRegistrados: [],
      ausuario:"",
      aemail:"",
      apassword:"",
      acpassword:"",
      arol:"",
      mid: "",
      musuario:"",
      memail:"",
      mpassword:"",
      mcpassword:"",
      mrol:""
    };
  },
  props: {

  },
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
        }, 1000);
        return true;
      }
      if (this.bid <=0) {
        alert("Error el id debe ser mayor a 0")
      }
    },
    modificacion(){
      //validaciones
      if (this.mid && this.musuario && this.memail  && this.mpassword && this.mcpassword == this.mpassword && this.mrol) {
        alert("Usuario/a modificado")
        //llamo al metodo que agrega los usuarios a mockapi con axios
        this.axiosput()
        setTimeout(() => { //reseta el formulario y variables en 0 segundos
        document.getElementById("formulario3").reset();
        //this.usuario = "", this.password = "";
        this.musuario = "", this.memail = "", this.mpassword = "", this.mcpassword = "", this.mpassword = "", this.mrol = "", this.mid = "";// esto borra todo incluyendo el array 
        }, 0);
        return true; // con true no entra a las demas validaciones
      }
      if (this.mid <=0 && !this.musuario && !this.memail && !this.mpassword && !this.mcpassword && !this.mrol) {
        alert("Error faltan todos los campos")
        return true;
      }
      if (this.mid <=0) {
        alert("Error el id debe ser mayor a 0")
      }
      if (!this.musuario) {
        alert("Error falta usuario")
      }
      if (!this.memail) {
        alert("Error falta email")
      }
      if (!this.mpassword) {
        alert("Error falta password")
      }
      if (!this.mcpassword) {
        alert("Error falta confirmar password")
      }
      if (this.mcpassword != this.mapassword) {
        alert("Error la contraeña no coincide")
      }
      if (!this.mrol) {
        alert("Error falta seleccionar el rol")
      }
    },
    axiosput(){
      //creo el objeto a enviar
      const modSkin={
        usuario: this.musuario,
        email: this.memail,
        password: this.mpassword,
        rol: this.mrol
      }
      //url a la cual enviar
      const URLM ="https://639dfe161ec9c6657bb75ebf.mockapi.io/usuarios/"+this.mid;
      //le indico la url y el objeto que se va postear y listo
      axios.put(URLM,modSkin)
      setTimeout(() => {
        this.getApi();
      }, 1000);
    },
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
      }, 1000);
    },
    renderizar(){
      const URLR ="https://639dfe161ec9c6657bb75ebf.mockapi.io/usuarios";
        axios.get(URLR)
        .then((response) => {
          this.usuariosRegistrados = response.data;
        })
        .catch((error) => {
          console.log(error)
        })
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

.formulario__contenedor3 {
    background-color: #343bc3;
    padding: 10px;
    /* relleno de 10px */
    width: 400px;
    /* ancho */
    height: 470px;
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

.tablas{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 30%;
    margin: auto;
}
</style>