<template>
  <div>
  <div class="tablas">
  <h1>Usuarios registrados</h1> <!-- titulo para cada tabla -->
  <table class="table table-sm table-primary" > <!-- vindeo el colorcompo cuyo valor viene de data y se pasa por parametro-->
            <thead>
                <tr>
                    <th scope="col">Usuario</th> <!-- head coon variable local -->
                    <th scope="col">Email</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Id</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(usu, index) in obtenerUsuarios" :key="index"> <!-- recorro el array que llega en props y saco cada pet -->
                    <td>{{usu.usuario}}</td>
                    <td>{{usu.email}}</td>
                    <td>{{usu.rol}}</td>
                    <td>{{usu.id}}</td>
                </tr>
            </tbody>
  </table>
  </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "UsuariosRegistrados",
  created() {
    this.getApi()
  },
  data() {
    return {

    };
  },
  props: {
    
  },
  computed: {
    ...mapGetters(['obtenerUsuarios']),
  },
  methods: {
    ...mapActions(['getApi']),
    
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