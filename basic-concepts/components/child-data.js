Vue.component('child-data', {
  data () {
    return {
      componentName: 'Child data component'
    }
  },
  template: `
    <div>
      <h2>Acceo a datos de el componente hijo</h2>
    </div>
  `
});