<template>
  <div>
  <h1>{{titulo}}</h1>
  <table class="table table-sm table-dark" > <!-- vindeo el colorcompo cuyo valor viene de data y se pasa por parametro-->
            <thead>
                <tr>
                    <th scope="col">{{nombre}}</th> <!-- head coon variable local -->
                    <th scope="col">{{apellido}}</th>
                    <th scope="col">{{email}}</th>
                    <th scope="col">{{telefono}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, index) in datosFormularioCompo" :key="index"> <!-- recorro el array que llega en props y saco cada pet -->
                    <td>{{data.nombre}}</td>
                    <td>{{data.apellido}}</td>
                    <td>{{data.email}}</td>
                    <td>{{data.telefono}}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
export default {
  name: "TablaFormulario",
  created() {

  },
  data() {
    return {
      titulo: "Tabla de Usuarios",
      nombre: "Nombre",
      apellido: "Apellido",
      email: "Email",
      telefono: "Telefono"
    };
  },
  props: {
    datosFormularioCompo: Array
  
  },
  methods: {
  
  },
};
</script>

<style  scoped>

h1{
  margin-top: 5%;
  margin-bottom: 1%;
}

table{
  width: 80%;
  margin:5% auto;
}

</style>