<!--Formulario del entregable #5 -->
<template>
  <div>
  <section class="formulario"> <!-- form -->
      <form action="" id="formulario" @submit.prevent="agregarDatos">
        <div class="formulario__contenedor">
          <div>
            <label>Nombre:</label><!-- muestra la palabra antes del input -->
            <input v-model="dnombre" class="formulario__input " placeholder="Richard"> <!-- son campos para escribir como nombre email etc -->
          </div>
          
          <div>
            <label>Apellido:</label>
            <input v-model="dapellido" class="formulario__input " placeholder="Romero"> 
          </div>
          
          <div>
            <label>Email:</label>
            <input v-model="demail" class="formulario__input " type="email" placeholder="Richard@email.com"> 
          </div>
          
          <div>
            <label>Telefono:</label>
            <input v-model.number="dtelefono" class="formulario__input " type="number" placeholder="1234567890"> 
          </div>
          
          <div>
            <!-- <input class="formulario__boton formulario__input" type="reset" value="Cancelar"> --> <!-- resetea lo escrito -->
            <input class="formulario__boton formulario__input btn btn-success" type="submit" value="Enviar"> <!-- PARA enviar submit, se deja en reset para que no cuelgue la pagina -->
          </div>
        </div>
      </form>
    </section> <!-- form -->
    <TablaFormulario :datosFormularioCompo="datosFormulario"/>
  </div>
</template>

<script>
// imports de los componentes
import TablaFormulario from "./TablaFormulario.vue";
// imports de los componentes

export default {
  name: "FormularioEntregable",
  created() {
  
  },
  components: {
    TablaFormulario
  },
  data() {
    return {
    datosFormulario:[],
    dnombre: "",
    dapellido: "",
    demail: "",
    dtelefono: ""
    };
  },
  props: {
  
  },
  methods: {
  agregarDatos(){
      //validaciones
      if (this.dnombre && this.dapellido && this.demail && this.dtelefono) {
        alert("ok")
        //crea un objeto literal con los datos
        const newDato = {
        nombre: this.dnombre,
        apellido: this.dapellido,
        email: this.demail,
        telefono: this.dtelefono
        }
        this.datosFormulario.push(newDato)//agrego el objeto al array
        setTimeout(() => { //reseta el formulario y variables en 0 segundos
        document.getElementById("formulario").reset();
        this.dnombre = "", this.dapellido = "", this.demail = "", this.dtelefono = "";
        //Object.assign(this.$data, this.$options.data()); // esto borra todo incluyendo el array 
        }, 0);
        return true; // con true no entra a las demas validaciones
      }
      if (!this.dnombre && !this.dapellido && !this.demail && !this.dtelefono) {
        alert("Error faltan todos los campos")
        return true;
      }
      if (!this.dnombre) {
        alert("Error falta nombre")
      }
      if (!this.dapellido) {
        alert("Error falta apellido")
      }
      if (!this.demail) {
        alert("Error falta email")
      }
      if (!this.dtelefono) {
        alert("Error falta telefono")
      }
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
  margin-top: 5%;
  }

.formulario__contenedor {
    background-color: #1d1d1b;
    padding: 10px;
    /* relleno de 10px */
    width: 400px;
    /* ancho */
    height: 380px;
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