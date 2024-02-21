
const { createApp } = Vue


createApp({
    data() {
        return {
     
            parola: "",
            array:[]
            
        }
    },
    
    // al caricamento della pagina:
    mounted() {
        

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resultato) => {
           // console.log(resultato)
            this.parola = resultato.data.response
            
            for(let i=0; i<10;i++){
                this.array.push(this.parola)
            }
           console.log(this.array)
        });
    }
}).mount('#app');
