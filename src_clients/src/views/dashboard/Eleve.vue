

<template>
    <div class="Container">
        <div class="columns is-multiline">
            <div class="column is-12">
                <div class="title">
                     <h3>{{ eleve.nom }} {{ eleve.prenom }}</h3>
                </div>
               
            </div>
           
            <div class="column is-6">
                <div class="title is-6">
                    Identités
                </div>
                <div class="box">
                    <p> <strong>Nom : </strong> {{ eleve.nom }}</p>
                    <p> <strong>Prenom : </strong>{{ eleve.prenom }}</p>
                    <p><strong>Sexe : </strong>{{ eleve.sexe }}</p>
                    <p><strong>Date de naissance :</strong> {{ eleve.date_naissance }}</p>
                    <p><strong>Lie de naissance : </strong>{{ eleve.lieu_naissance }}</p>
                </div>
                
            </div>
            <div class="column is-6">
                 <div class="title is-6">
                    Contactes
                </div>
                <div class="box">
                    <p><strong>Addresse (Quartier) :</strong> {{ eleve.addresse }}</p>
                    <p><strong>Portable :</strong> {{ eleve.telephone }}</p>
                    <p><strong>E-mail :</strong> {{ eleve.email }}</p>
                    
                </div>
                 
                  <router-link :to="{name:'EditeEleve'}">
                                    Editer
                                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'Eleve',
    data() {
        return {
            eleve:{}
        }
    },
    mounted(){
        this.getEleve()
    },
    methods: {
        async getEleve() {
            

            const eleveID = this.$route.params.id

            this.$store.commit('setIsLoading', true)

            axios
                .get(`/api/v1/eleves/${eleveID}/`)
                .then(response => {
                    this.eleve = response.data
                   
                })
                .catch(error => {
                    console.log(error)
                })

            this.$store.commit('setIsLoading', false)
        }
    }
}
</script>
