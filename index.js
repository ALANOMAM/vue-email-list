
const { createApp } = Vue


createApp({
    data() {
        return {
            singolaMail: "",
            mailArray:[]
            
        }
    },
    
   
    mounted() {
        

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resultato) => {
          
            this.singolaMail = resultato.data.response
            
            for(let i=0; i<10;i++){
                this.mailArray.push(this.singolaMail)
            }
           
        });
    }
}).mount('#app');
