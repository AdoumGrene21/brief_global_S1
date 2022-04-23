<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">
              Editer {{ eleve.nom }}
                </h1>

                <form @submit.prevent="submitForm">
                    <div class='field'>
                        <label>Nom</label>
                        <div class='control'>
                            <input type='text' name='nom' class='input' v-model="eleve.nom">
                        </div>
                    </div>
                    
                    <div class='field'>
                        <label>Prenom</label>
                        <div class='control'>
                            <input type='text' name='prenom' class='input' v-model="eleve.prenom">
                        </div>
                    </div>

                    <div class='field'>
                        <label>Sexe</label>
                        <div class='control'>
                            <div class='select'>
                                <select  v-model="eleve.sexe">
                                    <option value='' >Sexe</option>
                                    <option value='masculin' >Masculin</option>
                                    <option value='feminin'>Feminin</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class='field'>

                        <label>Date de naissance</label>
                        <div class='control'>
                            <input type='date' name='date_naissance' class='input' v-model="eleve.date_naissance">
                        </div>
                    </div>

                    <div class='field'>
                        <label>Lieu de naissance</label>
                        <div class='control'>
                            <input type='text' name='lieu_naissance' class='input' v-model="eleve.lieu_naissance">
                        </div>
                    </div>

                    <div class='field'>
                        <label>Addresse</label>
                        <div class='control'>
                            <input type='text' name='addresse' class='input' v-model="eleve.addresse">
                        </div>
                    </div>

                    <div class='field'>
                         <label>Email</label>
                        <div class='control'>
                            <input type='mail' name='email' class='input' v-model="eleve.email">
                        </div>
                    </div>

                    <div class='field'>
                        <label>Telephone</label>
                        <div class='control'>
                            <input type='text' name='telephone' class='input' v-model="eleve.telephone">
                        </div>
                    </div>
                    <div class='field'>
                        <div class='control'>
                            <button class='button is-success' > Editer</button>
                        </div>
                    </div>

                </form>
                
            </div>

            
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {toast} from 'bulma-toast'

export default {
    name: 'EditeEleve',
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
        },
        async submitForm(){
                this.$store.commit('setIsLoading', true)
                const eleveID = this.$route.params.id
                await axios
                    .patch(`/api/v1/eleves/${eleveID}/`, this.eleve)
                    .then(response => {
                        toast({
                            message:'La mise a jour a été effectué avec success!',
                            type: 'is-success',
                            dismissable: true,
                            pauseOnHover: true,
                            duration:2000,
                            position:'bottom-right',
                        })
                        this.$router.push(`/dashboard/eleves/${eleveID}`)
                    })
                    .catch(error => {
                        console.log(error)
                    })

                this.$store.commit('setIsLoading', false)
            }
    }
}
</script>
