
const { createApp } = Vue


createApp({
    data() {
        return {
            arrayColori:["green","pink","yellow","black","blue","orange","red","violet","white","gray"],
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
