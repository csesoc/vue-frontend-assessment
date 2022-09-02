<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'ProfileCard',
});
</script>

<template>
  <div class='w-full max-w-lg px-4 mx-auto'>
    <div class='relative flex flex-col min-w-0 bg-white w-full mb-6 shadow-xl rounded-lg mt-16 border border-gray-200'>
      <div class='px-6'>
        <div class='flex flex-col justify-center'>
          <img
            class='w-32 h-32 m-auto rounded-full mt-5'
            src='data:image/jpeg;base64,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'
            alt='Profile Picture'
          >
          <div class='flex justify-center py-4'>
            <a
              target='_blank'
              href='https://adriantan09.github.io/'
              class='px-3'
            >
              <img
                src='../assets/website.svg'
                class='w-6 h-6 fill-slate-900 m-auto'
              >
              <span class='text-sm text-blueGray-400'>Website</span>
            </a>

            <a
              target='_blank'
              href='https://github.com/adriantan09'
              class='px-3'
            >
              <img
                src='../assets/github.svg'
                class='w-6 h-6 fill-slate-900 m-auto'
              >
              <span class='text-sm text-blueGray-400'>Github</span>
            </a>

            <a
              target='_blank'
              href='https://www.linkedin.com/in/adriantan09/'
              class='px-3'
            >
              <img
                src='../assets/linkedin.svg'
                class='w-6 h-6 fill-slate-900 m-auto'
              >
              <span class='text-sm text-blueGray-400'>LinkedIn</span>
            </a>
          </div>
        </div>

        <div class='text-center py-3'>
          <h3 class='text-xl font-semibold leading-normal mb-2 text-blueGray-700'>
            Adrian Tan
          </h3>
          <div class='text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase'>
            Sydney, Australia
          </div>
        </div>
        
        <div class='py-6 border-t border-gray-300 text-center'>
          <div class='flex flex-wrap justify-center'>
            <div class='w-full'>
              <p class='mb-4 text-md leading-relaxed text-blueGray-700'>
                Hi there 👋, I'm Adrian.
                In my spare time I enjoy exploring nature 🗻, taking photos 📸 and coding 💻.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
