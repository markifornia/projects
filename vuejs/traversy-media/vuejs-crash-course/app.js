const app  = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json();

            console.log(results);

            this.firstName = results[0].name.first,
            this.lastName = 'Doe',
            this.email = 'john@gmail.com',
            this.gender = 'female',
            this.picture = 'https://randomuser.me/api/portraits/women/10.jpg'
        }
    }
});

app.mount("#app");