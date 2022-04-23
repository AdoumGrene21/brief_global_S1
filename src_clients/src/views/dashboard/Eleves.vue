<template>
    <div class="Container">
        <div class='columns is-multiline'>
            <div class='column is-12'>
                <div class = "title">
               Listes des Eleves
                </div>
                
            </div>
            <div class='column is-12'>
             <span class = "is-size-5">
                <router-link to="/dashboard/eleves/add"> Add</router-link>
            </span>
            <br>
                   
            </div>


            <table class = "table is-fullwidth">
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Nom</th>
                     <th>Prenom</th>
                     <th>Sexe</th>
                     <th>Action</th>
                      </tr>
               </thead>
            
               <tbody>
                  <tr
                     v-for="eleve in eleves"
                     v-bind:key ="eleve.id">
                            <td>{{ eleve.id }}</td>

                            <td>{{ eleve.nom }}</td>
                            <td>{{ eleve.prenom }}</td>
                            <td>{{ eleve.sexe }}</td>
                            <td>
                                <router-link :to="{name:'Eleve',params:{id: eleve.id}}">
                                    Detail
                                </router-link>
                            </td>
                  </tr>
                        
                 
               </tbody>
            </table>
            </div>
           
        </div>
     
   
</template>
<script>
import axios from 'axios'
export default {
    name: 'Eleves',
    data() {
        return {
            eleves:[]
        }
    },
    mounted(){
        this.getEleves()
    },
    methods: {
        async getEleves() {
            this.$store.commit('setIsLoading', true)

            axios
                .get('/api/v1/eleves/')
                .then(response => {
                    this.eleves = response.data
                   
                })
                .catch(error => {
                    console.log(error)
                })

            this.$store.commit('setIsLoading', false)
        }
    }
}
</script>