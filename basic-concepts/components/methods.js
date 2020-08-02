Vue.component('methods', {
    data() {
        return {
            name: 'Carlos',
            surname: 'León'
        };
    },
    computed: {
        fullname() {
            return `${this.name} ${this.surname}`;
        }
    },
    methods: {
        hello() {
            alert(this.fullname);
        }
    },
    template: `
        <div>
            <h2>Ejecutar métodos con Vue.js</h2>
            <p @click="hello">Pulsa aquí para ejecutar el método hello</p>
        </div>
    `

});