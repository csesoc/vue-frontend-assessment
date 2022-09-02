<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'FormInput',
  props: {
    inputName: { type: String, required: true },
    required: { type: Boolean },
    type: { type: String, default: 'text' },
    modelValue: { type: String, default: '' }
  },
  emits: ['update:modelValue'],
  methods: {
    capitalise(string: String) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    requiredAsterisk() {
      return this.required ? ' *' : ''
    },
    handleInput(event: any) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
});
</script>

<template>
  <!--
    The :required='required' attribute is left out for 
    the input element in order to demonstrate 401 status 
   -->
  <input
    :id='inputName'
    :name='inputName'
    :type='type'
    :value='modelValue'
    :placeholder='capitalise(inputName) + requiredAsterisk()'
    autocomplete='off'
    class='appearance-none relative block w-full my-3 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
    @input='handleInput'
  >
</template>
