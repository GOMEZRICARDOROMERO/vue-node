<!--Loggin usuarios  -->
<template>
  <div class="container">
    <div v-if="habilitarlogin"> <!-- div de login -->
      <h1>Inicia Sesion</h1> <br>
        <section class="formulario"> <!-- form -->
            <form action="" id="formulario" @submit.prevent="login">
                  <div class="formulario__contenedor">
                    <div>
                      <label>Usuario:</label><!-- muestra la palabra antes del input -->
                      <input v-model="usuario" class="formulario__input " placeholder="Richard"> <!-- son campos para escribir como nombre email etc -->
                    </div>
                    
                    <div>
                      <label>Contraseña:</label>
                      <input v-model="password" class="formulario__input " type="password" placeholder="1234"> 
                    </div>
                    
                    <div>
                      <input class="formulario__boton formulario__input btn btn-success" type="submit" value="Enviar"> <!-- PARA enviar submit, se deja en reset para que no cuelgue la pagina -->
                    </div>
                  </div>
            </form>
        </section>
    </div> <!-- div de login -->
    <div v-if="!habilitarlogin"> <!-- div items -->
      <UserControl :usuloginprops="usulogin" :esadminprops="esadmin" />
    </div> <!-- div items -->
  </div> 
</template>

<script>
// imports de los componentes
import UserControl from '@/components/UserControl.vue'
import axios from 'axios'

export default {
  name: "LoginUser",
  components: {
    UserControl
  },
  created(
  ) {
    const URL ="https://639dfe161ec9c6657bb75ebf.mockapi.io/usuarios";
    axios.get(URL)
        .then((response) => {
          this.arrayusuarios = response.data;
          //console.log(this.arrayusuarios)
        })
        .catch((error) => {
          console.log(error)
        })
  },
  data() {
    return {
      usuario: "",
      password: "",
      habilitarlogin: true,
      esadmin: null,
      usulogin: "",
      arrayusuarios: [],//los usuarios que estan en mockapi
    };
  },
  props: {

  },
  methods: {
    login(){
      //validaciones
      if (this.usuario && this.password) {
        setTimeout(() => { //reseta el formulario y variables en 0 segundos
        document.getElementById("formulario").reset();
        //Object.assign(this.$data, this.$options.data()); // esto borra todo incluyendo el array
        //llamo al metodo que busca el usuario en el arrayde usuarios
        this.validarusuario()
        }, 0);
        return true; // con true no entra a las demas validaciones
      }
      if (!this.usuario && !this.password) {
        alert("Error faltan todos los campos")
        return true;
      }
      if (!this.usuario) {
        alert("Error falta usuario")
      }
      if (!this.password) {
        alert("Error falta password")
      }
    },
    //metodo que valida si el usuario existe
    validarusuario(){
      //busco en el arreglo el usuario y su contraseña
      //let existeUsuario = this.arrayusuarios.includes("puma");
      //creo una copia del array llamada resultado y le hago un filtro que busca el usuario y contraseña
      let resultado = this.arrayusuarios.filter((usu)=> usu.usuario == this.usuario && usu.password == this.password)
      if (resultado.length > 0) { // si es mayor que 0 encontro el usuario y la contraseña
        alert("Bienvenido "+this.usuario) // le doy una bienvenida
        this.habilitarlogin = false // habilito el componente de los skins
        let incluyeadmin = resultado.filter((usu)=> usu.rol == 'admin') //busco si el usuario es admin
        if (incluyeadmin.length > 0) {
          console.log("es admin")
          this.esadmin = true
          this.usulogin = this.usuario + ", tu rol es: Admin 😎"
        }else{
          this.esadmin = false
          console.log("no es admin")
          this.usulogin = this.usuario + ", tu rol es: User 😊"
        }
      }
      else{
        alert("usuario "+this.usuario+" no se encuentra registrado")
        this.$router.push('/singup');//redirigo al registro
      }
      //limpio los campos
      this.usuario = "", this.password = "";
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