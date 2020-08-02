Vue.component('computed-properties', {
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
    template: `
        <div>
            <h2>Computed properties</h2>
            <p>{{ fullname }}</p>
        </div>
    `
});