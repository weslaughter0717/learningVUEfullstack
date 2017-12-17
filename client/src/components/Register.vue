<template>
  <div>
    <h1>Register</h1>
    
    <input type='email' 
    name='email' 
    v-model='email' 
    placeholder='email'/>
    <div>
    <input type='password' 
    name='password' 
    v-model='password' 
    placeholder='password'/>
    </div>
    <button 
    @click='register'>
      Register
      </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  // watch: {
  //   email (value) {
  //     console.log('email', value)
  //   }
  // },
  methods: {
    async register () {
      var response = await AuthenticationService.register({
      email: this.email,
      password: this.password
    })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
