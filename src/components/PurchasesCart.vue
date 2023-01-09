<template>
  <div>
  <h1>{{titulo}}</h1> <!-- titulo para cada tabla -->
  <table class="table table-sm table-dark" > <!-- vindeo el colorcompo cuyo valor viene de data y se pasa por parametro-->
            <thead>
                <tr>
                    <th scope="col">{{nombre}}</th> <!-- head coon variable local -->
                    <th scope="col">{{precio}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in obtenerCarrito" :key="index"> <!-- recorro el array que llega en props y saco cada pet -->
                    <td>{{item.titulo}}</td>
                    <td>$ {{item.precio}}</td>
                </tr>
                <tr>
                    <td>TOTAL</td>
                    <td>$ {{traerTotal(precioT)}}</td>
                </tr>
            </tbody>
        </table>
        <div class="div__button">
                <button  id="bcarrito" type="button" class="btn btn-primary btn-lg" @click="limpiar()">Limpiar</button>
                <button  id="pagar" type="button" class="btn btn btn btn-success btn-lg " @click="pagar()"> Pagar </button>
            </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
import axios from 'axios'


export default {
  name: "PurchasesCart",
  created() {

  },
  data() {
    return {
      titulo: "🛒 Carrito de compras 🛒",
      nombre: "Skin",
      precio: "Precio",
      precioT: 0,
      aVacio: [],
      x: " "
    };
  },
  props: {
    productosCarritocompo: Array
  },
  computed: {
    ...mapGetters(['obtenerCarrito','obtenerUsuarioLog']),
  },
  methods: {
    ...mapActions(['getApiTres']),
    ...mapMutations(['limpiarCarrito']),
    traerTotal(num){
      for (let index = 0; index < this.obtenerCarrito.length; index++) {
        const element = this.obtenerCarrito[index];
        var total = element.precio
        num += total
      }
      return num
    },limpiar(){
      this.limpiarCarrito(this.aVacio)
      alert("Se vacio el carrito")
    },
    pagar(){
      //creo el objeto a enviar
      for (let index = 0; index < this.obtenerCarrito.length; index++) {
        const element = this.obtenerCarrito[index];
        var name = element.titulo
        this.x += name +", "
      }
      const usuariord = ""+this.obtenerUsuarioLog
      const skinsord = this.obtenerCarrito.length // par ala cantidad
      const nuevaOrder={
        usuario: usuariord.split(",")[0],
        skins: this.x.slice(0, -2),//.slice(0, -2) para quitar el espacio y la , al final
        precio: this.traerTotal(this.precioT),
      }
      if (skinsord === 0) {
        alert("Error debe agregar productos")
      }else{
        //url a la cual enviar
      const URLUP ="https://639dfe161ec9c6657bb75ebf.mockapi.io/ordenes";
      //le indico la url y el objeto que se va postear y listo
      axios.post(URLUP,nuevaOrder)
      setTimeout(() => {
        this.getApiTres();
        this.limpiarCarrito(this.aVacio)
      }, 1000);
      alert("Gracias por comprar")
      }
    }
  },
};
</script>

<style scoped>
.div__button{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
    margin-top: 1%;
    margin-bottom: 1%;
}
</style>