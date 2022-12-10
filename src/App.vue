<template>
  <div class="container text-center" id="app"> <!--todo en un div  -->
    <h1 class="text-center titulo">{{bienvenida}}</h1> <!-- titulo -->
    <!-- componentes -->
      <br>
      <SignUpUser/>
      <LoginUser/>
      <CardsItems :arrayskinscompo="arrayskins"/>
    <!-- componentes -->
  </div>
</template>

<script>
// imports de los componentes
import SignUpUser from './components/SignUpUser.vue'
import LoginUser from './components/LoginUser.vue'
import CardsItems from './components/CardsItems.vue'

// imports de los componentes

export default {
  name: 'App',
  components: {
    //nombre de los componenetes que se usan
    SignUpUser,
    LoginUser,
    CardsItems
    //nombre de los componenetes que se usan
  },
  data() {
    return {
      //array de objeros 
      arrayskins:[
        {
          titulo: "AHRI ARCANA",
          imgurl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_66.jpg",
          precio: 2500
        },
        {
          titulo: "AKALI SANGRIENTA",
          imgurl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_5.jpg",
          precio: 2500
        }
        ,
        {
          titulo: "AMUMU PEQUEÑO REY",
          imgurl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_6.jpg",
          precio: 1500
        },
        {
          titulo: "OFICIAL CAITLYN",
          imgurl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_5.jpg",
          precio: 2000
        },
        {
          titulo: "REY DIOS DARIUS",
          imgurl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_15.jpg",
          precio: 3000
        },
        {
          titulo: "DIANA VALQUIRIA",
          imgurl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_1.jpg",
          precio: 3000
        },
        {
          titulo: "FIZZ DE LA TUNDRA",
          imgurl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_2.jpg",
          precio: 2000
        },
        {
          titulo: "ILLAOI LUNA NEVADA",
          imgurl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Illaoi_18.jpg",
          precio: 1500
        },
        {
          titulo: "JAX DEL TEMPLO",
          imgurl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_6.jpg",
          precio: 2000
        },
        {
          titulo: "WUKONG RADIANTE",
          imgurl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_5.jpg",
          precio: 2500
        },
        {
          titulo: "RAYO VOLIBEAR",
          imgurl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_5.jpg",
          precio: 1500
        },
        {
          titulo: "POPPY HEXTECH",
          imgurl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_15.jpg",
          precio: 2500
        }
      ],
      //variables de data
      bienvenida: "Primera entrega Proyecto final",
      
    }
  },
  methods: {
    
  },
  computed: {
    
  },
}
</script>

<!-- css -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.titulo{
  margin-bottom: 2%;
}

</style>