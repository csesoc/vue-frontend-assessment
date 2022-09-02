<script lang='ts'>
import { defineComponent } from 'vue'
import router from '../router';

export default defineComponent ({
  name: 'LoginModal',
  props: {
    modelValue: Boolean,
    response: { type: Object, required: true }
  },
  emits: ['update:modelValue'],
  mounted() {
    const button = this.$refs.modalButton
    if (button instanceof HTMLElement) button.focus()
  },
  methods: {
    isSuccess(status: Number) {
      return status === 200
    },
    loginMessage(message: String) {
      return message ? message : 'Unable to login.'
    },
    closeModal() {
      this.$emit('update:modelValue', !this.modelValue)
      
      if (this.isSuccess(this.response?.status)) {
        router.push('/profile')
      }
    },
  }
});
</script>

<template>
  <div 
    class='relative z-10'
    aria-labelledby='modal-title'
    role='dialog'
    aria-modal='true'
  >
    <div class='fixed inset-0 bg-gray-900 bg-opacity-75' />

    <div class='fixed z-10 inset-0 overflow-y-auto'>
      <div
        class='flex items-center justify-center min-h-full p-4 text-center'
        @click='closeModal'
        @keyup.esc='closeModal'
      >
        <div
          class='relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all max-w-sm w-full'
          @click.stop=''
        >
          <div class='bg-white px-4 pt-5 pb-4 p-6'>
            <div class='flex items-center flex-col'>
              <div
                v-if='isSuccess(response?.status)'
                class='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10 bg-green-100'
              >
                <img
                  alt='Success'
                  src='../assets/success.svg'
                  class='w-6 h-6'
                >
              </div>
              <div
                v-else
                class='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'
              >
                <img 
                  alt='Fail'
                  src='../assets/fail.svg'
                  class='w-6 h-6'
                >
              </div>

              <h3
                id='login-message'
                class='text-lg leading-6 font-medium text-gray-900 pt-4'
              >
                {{ loginMessage(response?.message) }}
              </h3>
            </div>
          </div>
          <div class='bg-gray-50 px-4 py-3 '>
            <button
              id='modalButton'
              ref='modalButton'
              type='button'
              class='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              @click='closeModal'
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
