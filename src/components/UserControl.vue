<template>
    <div>
        <h1>Bienvenido {{$store.getters.obtenerUsuarioLog}}
        <button type="button" class="btn btn-danger" @click="logout">Log out</button>
        </h1>
        <br><br>
        <div v-if="$store.getters.obtenerAdmin"> <!-- controles admin -->
            <div class="d-flex justify-content-around w-25 mx-auto">
                <button type="button" class="btn btn-outline-warning" @click="ordersButton">Orders</button>
                <button type="button" class="btn btn-outline-secondary" @click="abmStoreButton">ABM Store</button>
                <button type="button" class="btn btn-outline-danger" @click="abmUserButton">ABM User</button>
            </div>
        </div>
        <div v-if="!$store.getters.obtenerAdmin"> <!-- controles user -->
            <div class="d-flex justify-content-around w-25 mx-auto">
                <button type="button" class="btn btn-outline-warning" @click="storeButton">Store</button>
                <button type="button" class="btn btn-outline-secondary" @click="storeCart">Carrito</button>
            </div>
        </div>
        <br><br>
        <div v-if="store"> <!-- store -->
            <CardsItems/>
        </div>
        <div v-if="abmstore"> <!-- abmstore -->
            <AbmStore/>
        </div>
        <div v-if="abmuser"> <!-- abmuser -->
            <AbmUser/>
        </div>
        <div v-if="cart"> <!-- abmuser -->
            <PurchasesCart/>
        </div>
        <div v-if="orders"> <!-- abmuser -->
            <OrdersItems/>
        </div>
    </div>
</template>

<script>
// imports de los componentes
import CardsItems from '@/components/CardsItems.vue'
import AbmStore from '@/components/AbmStore.vue'
import AbmUser from '@/components/AbmUser.vue'
import PurchasesCart from '@/components/PurchasesCart.vue'
import OrdersItems from '@/components/OrdersItems.vue'
import {mapMutations} from 'vuex'

export default {
    name: 'UserControl',
    components: {
    CardsItems,
    AbmStore,
    AbmUser,
    PurchasesCart,
    OrdersItems
    },
    data() {
        return {
            store: false,
            abmstore: false,
            abmuser: false,
            cart: false,
            orders: false
        };
    },
    props: {
        usuloginprops: String,
        esadminprops: null
    },
    methods: {
        ...mapMutations(['usuLogout']),
        storeButton(){
            Object.assign(this.$data, this.$options.data());//deja la data en su estado original
            this.store = true
        },
        abmStoreButton(){
            Object.assign(this.$data, this.$options.data());//deja la data en su estado original
            this.abmstore = true
        },
        abmUserButton(){
            Object.assign(this.$data, this.$options.data());//deja la data en su estado original
            this.abmuser = true
        },
        logout(){
            this.usuLogout()
            this.$router.push('/');//redirigo al home
        },
        storeCart(){
            Object.assign(this.$data, this.$options.data());//deja la data en su estado original
            this.cart = true
        },
        ordersButton(){
            Object.assign(this.$data, this.$options.data());//deja la data en su estado original
            this.orders = true
        }
    },
};
</script>

<style  scoped>

</style>