Vue.component('child-methods', {
  data () {
    return {
      componentName: 'Child methods component'
    }
  },
  methods: {
    showComponentName () {
      console.log(`Llamada al método ${this.componentName}`);
    }
  },
  template: `
    <div>
      <h2>Acceo a métodos de el componente hijo</h2>
    </div>
  `
});