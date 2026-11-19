<template>
  <q-page class="column items-center justify-center">
    <q-card class="q-pa-md" style="min-width: 400px">
      <q-card-section class="text-center text-h5">About Qwitter</q-card-section>
      
      <q-card-section>
        <p>
          Qwitter is a Twitter clone built with <strong>Vue.js 3</strong>, 
          <strong>Quasar Framework</strong>, and <strong>Firebase</strong>.
        </p>
        
        <p class="q-mt-md">
          <strong>Features:</strong>
        </p>
        <ul>
          <li>Post tweets</li>
          <li>Real-time updates</li>
          <li>Responsive design</li>
        </ul>
      </q-card-section>

      <q-card-actions>
        <q-btn
          label="Back to Home"
          color="primary"
          to="/"
          class="full-width"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageAbout'
})
</script>
