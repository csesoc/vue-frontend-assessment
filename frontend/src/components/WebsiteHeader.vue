<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'WebsiteHeader'
});
</script>

<template>
  <div class='flex justify-between items-center py-4 px-8 bg-grey'>
    <p 
      id='header-logo' 
      class='text-2xl font-bold text-d text-purple'
    >
      Pogjects
    </p>
    <p
      id='header-byline'
      class='text-white'
    >
      Vue is Mega Fun
    </p>
  </div>
</template>

