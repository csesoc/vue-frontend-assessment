<script lang='ts'>
import { defineComponent } from 'vue'
import api from '../api'
import FormInput from './FormInput.vue';
import LoginModal from './LoginModal.vue';

export default defineComponent ({
  name: 'LoginForm',
  components: {
    FormInput,
    LoginModal
  },
  data() {
    return {
      username: '',
      password: '',
      loginAttempt: false,
      loginResponse: { 'status': 0, 'message': '' }
    };
  },
  methods: {
    async login() {
      try {
        const response = await api.login(this.$data)
        this.loginResponse = await response.json()
      } catch (error) {
        console.error('ERROR:', error)
      }
      this.loginAttempt = true
    }
  }
});
</script>

<template>
  <div class='flex justify-center py-16 px-4 sm:px-6 lg:px-8'>
    <div class='max-w-md w-full'>
      <h2 class='mt-6 text-center text-3xl tracking-tight font-bold text-gray-900'>
        Login to your account
      </h2>
      <form
        class='mt-8 space-y-6'
        @submit.prevent='login'
      >
        <div class='rounded-md shadow-sm -space-y-px'>
          <FormInput
            ref='username'
            v-model='username'
            input-name='username'
            required
          />
          <FormInput
            v-model='password'
            input-name='password'
            required
            type='password'
          />
        </div>
        <button
          id='login'
          type='submit'
          class='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Login
        </button>
      </form>
    </div>
  </div>

  <LoginModal
    v-if='loginAttempt'
    v-model='loginAttempt'
    :response='loginResponse'
  />
</template>
