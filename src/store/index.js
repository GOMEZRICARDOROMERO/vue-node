import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //variables del store que podran ser accedidas desde cualquier componente
    usuariosRegistrados: [] //aqui se guarda los usuarios que trae desde mockappi 
  },
  getters: {
    //los getters traen los datos de state
    obtenerUsuarios(state){
      return state.usuariosRegistrados;
    }
  },
  mutations: {
    // las mutaciones se usan para modificar las variables de state
    cargarUsuarios(state, usuariosMockapi){
      state.usuariosRegistrados = usuariosMockapi;
    }
  },
  actions: {
    // consultan el backend (mockappi) y se lanzan los commits para llamar las mutaciones
    getApi: async function({commit}){
      const data = await fetch("https://639dfe161ec9c6657bb75ebf.mockapi.io/usuarios");
      const usuariosRecibidos = await data.json();
      commit('cargarUsuarios',usuariosRecibidos);
    }
  },
  modules: {

  }
})
