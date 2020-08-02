Vue.component('vmodel', {
    data() {
        return {
            framework: 'Vuejs 2'
        };
    },
    template: `
        <div>
            <h2>Binding</h2>
            <input v-model="framework" />
            <p>El framework elegido es: {{ framework }}</p>
        </div>
    `
});