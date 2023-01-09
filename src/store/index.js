import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //variables del store que podran ser accedidas desde cualquier componente
    usuariosRegistrados: [], //aqui se guarda los usuarios que trae desde mockappi 
    skinsRegistradas: [], //aqui se guarda las skins que trae desde mockappi 
    usuarioLog: null, // aqui se guarda el usuario que se loguea
    esadmin: null,
    carrito: [],
    ordenesDeCompra: [],
  },
  getters: {
    //los getters traen los datos de state
    obtenerUsuarios(state){
      return state.usuariosRegistrados;
    },
    obtenerSkins(state){
      return state.skinsRegistradas;
    },
    obtenerUsuarioLog(state){
      return state.usuarioLog;
    },
    obtenerAdmin(state){
      return state.esadmin;
    },
    obtenerCarrito(state){
      return state.carrito;
    },
    obtenerOrdenes(state){
      return state.ordenesDeCompra;
    }
  },
  mutations: {
    // las mutaciones se usan para modificar las variables de state
    cargarUsuarios(state, usuariosMockapi){
      state.usuariosRegistrados = usuariosMockapi;
    },
    cargarSkins(state, skinsMockapi){
      state.skinsRegistradas = skinsMockapi;
    },
    logearUsu(state, usuLog){
      state.usuarioLog = usuLog;
    },
    esAdmin(state,usuad){
      state.esadmin = usuad;
    },
    usuLogout(state){
      state.usuarioLog = null 
      state.esadmin = null
    },
    carritoPush(state,carritoSkin){
      state.carrito.push(carritoSkin);
    },
    limpiarCarrito(state, aVacio){
      state.carrito = aVacio; 
    },
    cargarOrdenes(state, ordenesMockapi){
      state.ordenesDeCompra = ordenesMockapi;
    },
  },
  actions: {
    // consultan el backend (mockappi) y se lanzan los commits para llamar las mutaciones
    getApi: async function({commit}){
      const data = await fetch("https://639dfe161ec9c6657bb75ebf.mockapi.io/usuarios");
      const usuariosRecibidos = await data.json();
      commit('cargarUsuarios',usuariosRecibidos);
    },
    getApiDos: async function({commit}){
      const data = await fetch("https://639dfe161ec9c6657bb75ebf.mockapi.io/skins");
      const skinsRecibidos = await data.json();
      commit('cargarSkins',skinsRecibidos);
    },
    loguearUsuario: function ({commit},nombreusa) {
      const nombreusu = nombreusa
      commit('logearUsu',nombreusu);
    },
    getApiTres: async function({commit}){
      const data = await fetch("https://639dfe161ec9c6657bb75ebf.mockapi.io/ordenes");
      const ordenesRecibidas = await data.json();
      commit('cargarOrdenes',ordenesRecibidas);
    },
  },
  modules: {

  }
})
