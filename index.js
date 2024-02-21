
const { createApp } = Vue


createApp({
    data() {
        return {
     
            parola: "",
            
        }
    },
    
    // al caricamento della pagina:
    mounted() {
        

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resultato) => {
            console.log(resultato)
            this.parola = resultato.data.response
        });
    }
}).mount('#app');
