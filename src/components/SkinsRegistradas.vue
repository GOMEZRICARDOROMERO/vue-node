<!-- Tabla que muestra los skins -->
<template>
  <div>
  <div class="tablas">
  <h1>Skins registradas</h1> <!-- titulo para cada tabla -->
  <table class="table table-sm table-primary" > <!-- vindeo el colorcompo cuyo valor viene de data y se pasa por parametro-->
            <thead>
                <tr>
                    <th scope="col">Id</th> <!-- head coon variable local -->
                    <th scope="col">Titulo</th>
                    <th scope="col">Precio</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(skin, index) in obtenerSkins" :key="index"> <!-- recorro el array que llega en props y saco cada pet -->
                    <td>{{skin.id}}</td>
                    <td>{{skin.titulo}}</td>
                    <td>{{skin.precio}}</td>
                </tr>
            </tbody>
  </table>
  </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "SkinsRegistradas",
  created() {
    this.getApiDos()
  },
  data() {
    return {

    };
  },
  props: {
    
  },
  computed: {
    ...mapGetters(['obtenerSkins']),
  },
  methods: {
    ...mapActions(['getApiDos']),
    
  },
};
</script>

<style  scoped>
.tablas{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 30%;
    margin: auto;
}
</style>