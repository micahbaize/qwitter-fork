<template>
  <q-page class="column items-center justify-center">
    <div class="text-center">
      <div class="text-h2 q-mb-md">404</div>
      <div class="text-h4 q-mb-lg">Page Not Found</div>
      <q-btn
        label="Back to Home"
        color="primary"
        to="/"
        size="lg"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error404'
})
</script>
