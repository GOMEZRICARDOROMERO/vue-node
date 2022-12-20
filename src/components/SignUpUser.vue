<!--Registro usuarios -->
<template>
  <div>
    <h1>Registrate</h1>
    <section class="formulario">
        <form action="" id="formulario" @submit.prevent="singup">
            <div class="formulario__contenedor">
              <div>
                <label>Usuario:</label><!-- muestra la palabra antes del input -->
                <input v-model="usuario" class="formulario__input " placeholder="Richard"> <!-- son campos para escribir como nombre email etc -->
              </div>
              
              <div>
                <label>Email:</label>
                <input v-model="email" class="formulario__input " type="email" placeholder="Richard@"> 
              </div>
              
              <div>
                <label>Contraseña:</label>
                <input v-model="password" class="formulario__input " type="password" placeholder="1234"> 
              </div>
              
              <div>
                <label>Confirmar Contraseña:</label>
                <input v-model="cpassword" class="formulario__input " type="password" placeholder="1234"> 
              </div>
              
              <div>
                <h5>Rol de usuario</h5>
              </div>
              <div>
                  <input v-model="rol" type="radio" class="form-check-input" value="admin">
                  <label>Admin &nbsp;</label>
                  <input v-model="rol" type="radio" class="form-check-input" value="user">
                  <label>User </label>
              </div>
              
              <div>
                <input class="formulario__boton formulario__input btn btn-secondary" type="reset" value="Cancelar"> <!-- resetea lo escrito -->
                <input class="formulario__boton formulario__input btn btn-success" type="submit" value="Finalizar"> <!-- PARA enviar submit, se deja en reset para que no cuelgue la pagina -->
              </div>
            </div>
        </form>
    </section>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: "SignUpUser",
  created() {

  },
  data() {
    return {
      usuario:"",
      email:"",
      password:"",
      cpassword:"",
      rol:""
    };
  },
  props: {

  },
  methods: {
    singup(){
      //validaciones
      if (this.usuario && this.email  && this.password && this.cpassword == this.password && this.rol) {
        alert("Usuario agregado, ya puedes iniciar sesion")
        //llamo al metodo que agrega los usuarios a mockapi con axios
        this.axiospost()
        setTimeout(() => { //reseta el formulario y variables en 0 segundos
        document.getElementById("formulario").reset();
        //this.usuario = "", this.password = "";
        Object.assign(this.$data, this.$options.data()); // esto borra todo incluyendo el array 
        this.$router.push('/login');//redirigo al login
        }, 0);
        return true; // con true no entra a las demas validaciones
      }
      if (!this.usuario && !this.email && !this.password && !this.cpassword && !this.rol) {
        alert("Error faltan todos los campos")
        return true;
      }
      if (!this.usuario) {
        alert("Error falta usuario")
      }
      if (!this.email) {
        alert("Error falta email")
      }
      if (!this.password) {
        alert("Error falta password")
      }
      if (!this.cpassword) {
        alert("Error falta confirmar password")
      }
      if (this.cpassword != this.password) {
        alert("Error la contraeña no coincide")
      }
      if (!this.rol) {
        alert("Error falta seleccionar el rol")
      }
    },
    async post(){
      //creo el objeto que voy a enviar
      const nuevoUser={
        usuario: this.usuario,
        email: this.email,
        password: this.password,
        rol: this.rol
      }
      //url a la que voy a enviar
      const URL ="https://639dfe161ec9c6657bb75ebf.mockapi.io/usuarios";
      const response = await fetch(URL,{ //paso la url
                method:"POST", // indico que es metodo post
                headers:{"Content-Type": "application/json"}, // le paso los headers
                body: JSON.stringify(nuevoUser) // le paso el cuerpo converdito en json 
            })
            const respuestaPost = response.json();
            console.log(respuestaPost);
    },
    axiospost(){
      //creo el objeto a enviar
      const nuevoUser={
        usuario: this.usuario,
        email: this.email,
        password: this.password,
        rol: this.rol
      }
      //url a la cual enviar
      const URL ="https://639dfe161ec9c6657bb75ebf.mockapi.io/usuarios";
      //le indico la url y el objeto que se va postear y listo
      axios.post(URL,nuevoUser)
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