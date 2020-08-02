Vue.component('emit', {
  data () {
    return {
      carBrand: 'Toyota'
    }
  },
  template: `
    <div>
      <h2>Emitir eventos con Vuejs 2</h2>
      <p @click="$emit('showcarbrand', carBrand)">Pulsa aquí para emitir un evento click a la instancia Root de Vuejs</p>
    </div>
  `
});