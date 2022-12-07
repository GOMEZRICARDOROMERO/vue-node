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
                <tr v-for="(item, index) in productosCarritocompo" :key="index"> <!-- recorro el array que llega en props y saco cada pet -->
                    <td>{{item.titulo}}</td>
                    <td>$ {{item.precio}}</td>
                </tr>
                <tr>
                    <td>TOTAL</td>
                    <td>$ {{traerTotal(precioT)}}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
export default {
  name: "PurchasesCart",
  created() {},
  data() {
    return {
      titulo: "🛒 Carrito de compras 🛒",
      nombre: "Skin",
      precio: "Precio",
      precioT: 0
    };
  },
  props: {
    productosCarritocompo: Array
  },
  methods: {
    traerTotal(num){
      for (let index = 0; index < this.productosCarritocompo.length; index++) {
        const element = this.productosCarritocompo[index];
        var total = element.precio
        num += total
      }
      return num
    } 
  },
};
</script>

<style scoped>
</style>