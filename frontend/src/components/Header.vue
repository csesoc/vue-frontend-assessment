<script lang="ts">
import { defineComponent } from 'vue'

/**
 * Header component. You are welcome to modify this file although it might break the challenge.
 * Only modify it if you are confident of your abilities =)
 */

export default defineComponent ({
  name: 'WebsiteHeader',
  props: {
    changeText: {
      type: String,
      required: false,
      default: 'Vue is Fun'
    },
  },
  data() {
    return {};  
  }
});
</script>

<template>
  <div class='header-container'>
    <a id='logo'>Pogjects</a>
    <div>
      {{ changeText }}
    </div>
  </div>
</template>

<style scoped>
  .header-container {
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;
    border-bottom: 1px solid #e5e5e5;
    width: 100%;
    box-sizing: border-box;
  }

  #logo {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
  }
</style>