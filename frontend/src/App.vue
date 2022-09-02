<script lang='ts'>
import { defineComponent } from 'vue';
import WebsiteHeader from './components/WebsiteHeader.vue';
import WebsiteFooter from './components/WebsiteFooter.vue';

/**
 * App component. You are welcome to modify this file.
 */
export default defineComponent({
  components: {
    WebsiteHeader,
    WebsiteFooter,
  },
  data() {
    return {};
  },
});
</script>

<template>
  <WebsiteHeader />
  <main class='h-full'>
    <router-view />
  </main>
  <WebsiteFooter />
</template>
