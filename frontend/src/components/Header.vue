<script lang="ts">
import { defineComponent } from 'vue'

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
    return {
      // changeText: this.changeText,
    };  
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
    /* background-color: #f5f5f5; */
    border-bottom: 1px solid #e5e5e5;
  }

  #logo {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
  }
</style>