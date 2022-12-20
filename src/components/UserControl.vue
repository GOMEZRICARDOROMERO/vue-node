<template>
    <div>
        <h1>Bienvenido {{usuloginprops}}
        <button type="button" class="btn btn-danger" @click="logout">Log out</button>
        </h1>
        <br><br>
        <div v-if="esadminprops"> <!-- controles admin -->
            <div class="d-flex justify-content-around w-25 mx-auto">
                <button type="button" class="btn btn-outline-warning" @click="storeButton">Store</button>
                <button type="button" class="btn btn-outline-secondary" @click="abmStoreButton">ABM Store</button>
                <button type="button" class="btn btn-outline-danger" @click="abmUserButton">ABM User</button>
            </div>
        </div>
        <div v-if="!esadminprops"> <!-- controles user -->
            <button type="button" class="btn btn-outline-warning" @click="storeButton">Store</button>
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
    </div>
</template>

<script>
// imports de los componentes
import CardsItems from '@/components/CardsItems.vue'
import AbmStore from '@/components/AbmStore.vue'
import AbmUser from '@/components/AbmUser.vue'

export default {
    name: 'UserControl',
    components: {
    CardsItems,
    AbmStore,
    AbmUser
    },
    data() {
        return {
            store: false,
            abmstore: false,
            abmuser: false,
        };
    },
    props: {
        usuloginprops: String,
        esadminprops: null
    },
    methods: {
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
            this.$router.push('/');//redirigo al registro
        }
    },
};
</script>

<style  scoped>

</style>