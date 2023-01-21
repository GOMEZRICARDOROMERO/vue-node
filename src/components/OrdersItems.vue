<!-- Tabla que muestra las ordenes -->
<template>
  <div>
  <div class="tablas">
  <h1>Ordenes registradas</h1> <!-- titulo para cada tabla -->
  <table class="table table-sm table-primary" > <!-- vindeo el colorcompo cuyo valor viene de data y se pasa por parametro-->
            <thead>
                <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">ID</th>
                    <th scope="col">Usuario</th> <!-- head coon variable local -->
                    <th scope="col">Skins</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(ord, index) in obtenerOrdenes" :key="index"> <!-- recorro el array que llega en props y saco cada pet -->
                    <td>{{ord.fecha}}</td>
                    <td>{{ord.id}}</td>
                    <td>{{ord.usuario}}</td>
                    <td>{{ord.skins}}</td>
                    <td>$ {{ord.precio}}</td>
                </tr>
            </tbody>
  </table>
  </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "OrdersItems",
  created() {
    this.getApiTres()
  },
  data() {
    return {

    };
  },
  props: {
    
  },
  computed: {
    ...mapGetters(['obtenerOrdenes']),
  },
  methods: {
    ...mapActions(['getApiTres']),
    
  },
};
</script>

<style  scoped>
.tablas{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80%;
    margin: auto;
}
</style>