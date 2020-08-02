Vue.component('parent-data', {
  template: `
    <div>
      <h2>Acceo a datos de el componente padre</h2>
      <p>{{ $parent.appName }}</p>
    </div>
  `
});