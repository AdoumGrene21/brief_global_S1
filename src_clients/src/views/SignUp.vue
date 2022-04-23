<template>
     <div class="page-sign-up">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Sign Up</h1>
                <form @submit.prevent="submitForm">
                    <div class="field">
                        <label for="">Username</label>
                        <div class="control">
                            <input type="email" name="email" class="input"  v-model="username" >
                        </div>
                    </div> 

                    <div class="field">
                        <label for="">Password</label>
                        <div class="control">
                            <input type="password" name="password1" class="input" v-model="password1" >
                        </div>
                    </div>

                     <div class="field">
                        <label for="">Repeat Password </label>
                        <div class="control">
                            <input type="password" name="password2" class="input" v-model="password2" >
                        </div>
                    </div>

                    <div class="notification is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error"> {{ error }}</p>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-dark" > Sign Up </button>
                        </div>
                    </div>

                    <hr>

                </form>
            </div>
        </div>
    </div>
</template>
<script>

import axios from 'axios'

import {toast} from 'bulma-toast'

export default {
    name: 'SignUp',
    data() {
        return {
            username: '',
            password1:'',
            password2:'',
            errors: [],
        }        
    },
    methods: {
        async submitForm(){
            this.errors = []

            if (this.username === '') {
                this.errors.push('* Le login ou mail est vide!')
            }

            if (this.password1 === '') {
                this.errors.push('* Le mot de passe est court!')
            }

            if (this.password1 !== this.password2 ) {
                this.errors.push('* Le mot de passe n\'est pas le même!')                
            }

            if (!this.errors.length) {
                this.$store.commit('setIsLoading', true);
                const formData = { 
                    username: this.username,
                    password: this.password1,
                }
                
            await axios
                .post('/api/v1/users/', formData)
                .then(response => {
                    toast({
                        message:'Le compte a été creé avec success, log in please!!!.',
                        type: 'is-success',
                        dismissable: true,
                        pauseOnHover: true,
                        duration: 2000,
                        position: 'bottom right'
                    })
                    this.$router.push('/log-in')
                })
                .catch(error => {
                    if (error.response) {
                        for (const property in error.response.data) {
                            this.errors.push(`${property}: ${error.response.data[property]}`)   
                        }
                    } else if(error.message) {
                        this.errors.push('veuillez reessaye s\'il vous plait!')
                    }
                }) 
            this.$store.commit('setIsLoading', false);
            }

            
        }
    }
    
}
</script>