<template>
  <div> <!-- todo dentro de un div siempre -->
  <h1>{{titulo}}</h1> <!-- titulo para cada tabla -->
    <table class="table table-sm" :class="colorcompo" > <!-- vindeo el colorcompo cuyo valor viene de data y se pasa por parametro-->
            <thead>
                <tr>
                    <th scope="col">{{nombre}}</th> <!-- head coon variable local -->
                    <th scope="col">{{raza}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(pet, index) in arraycompo" :key="index"> <!-- recorro el array que llega en props y saco cada pet -->
                    <td>{{pet.nombre}}</td>
                    <td>{{pet.razaocolor}}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
export default {
  name: "EntregableTres",
  created() {},
  //la data debe ir dentro del retun
  data() {
    return {
      //aqui va la data
            nombre: "Nombre",
            raza: "Raza y/o Color",
    };
  },
  //las props son los datos que el componente va a recibir desde data/app
  props: {
    colorcompo: String, //recibo un string y lo llamo colorcompo
    arraycompo: Array,
    titulo: String
  },
  methods: {},
};
</script>

<!-- Styles propios del componente -->
<style scoped>
table{
  margin: 10px 0 10px 0;  /* top y bot 10px */
}
</style>