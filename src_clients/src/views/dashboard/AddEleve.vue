<template>
    <div class="Container">
        <div class='columns is-multiline'>
            <div class='column is-12'>
                <div class='title'>
                    Enregistrer un eleve
                </div>
            </div>

            <div class='column is-12'>
                <form @submit.prevent="submitForm">
                    <div class='field'>
                        <label>Nom</label>
                        <div class='control'>
                            <input type='text' name='nom' class='input' v-model="nom">
                        </div>
                    </div>
                    
                    <div class='field'>
                        <label>Prenom</label>
                        <div class='control'>
                            <input type='text' name='prenom' class='input' v-model="prenom">
                        </div>
                    </div>

                    <div class='field'>
                        <label>Sexe</label>
                        <div class='control'>
                            <div class='select'>
                                <select  v-model="sexe">
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
                            <input type='date' name='date_naissance' class='input' v-model="date_naissance">
                        </div>
                    </div>

                    <div class='field'>
                        <label>Lieu de naissance</label>
                        <div class='control'>
                            <input type='text' name='lieu_naissance' class='input' v-model="lieu_naissance">
                        </div>
                    </div>

                    <div class='field'>
                        <label>Addresse</label>
                        <div class='control'>
                            <input type='text' name='addresse' class='input' v-model="addresse">
                        </div>
                    </div>

                    <div class='field'>
                         <label>Email</label>
                        <div class='control'>
                            <input type='mail' name='email' class='input' v-model="email">
                        </div>
                    </div>

                    <div class='field'>
                        <label>Telephone</label>
                        <div class='control'>
                            <input type='text' name='telephone' class='input' v-model="telephone">
                        </div>
                    </div>
                    <div class='field'>
                        <div class='control'>
                            <button class='button is-success' > Valider</button>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'AddEleve',
        data() {
            return {
                nom : '',
                prenom : '',
                sexe : '',
                date_naissance:'',
                lieu_naissance: '',
                addresse : '',
                email : '',
                telephone: ''
            }
        },
        methods: {
           async submitForm(){
               this.$store.commit('setIsLoading', true)
                const eleve = {
                    nom: this.nom,
                    prenom: this.prenom,
                    sexe: this.sexe,
                    date_naissance: this.date_naissance,
                    lieu_naissance: this.lieu_naissance,
                    addresse: this.addresse,
                    email: this.email,
                    telephone: this.telephone

                }
                await axios
                    .post('/api/v1/eleves/', eleve)
                    .then(response => {
                        
                        this.$router.push('/dashboard/eleves/')
                    })
                    .catch(error => {
                        console.log(error)
                    })

                this.$store.commit('setIsLoading', false)
            }
        }
    }
</script>