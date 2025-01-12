<template>
  <AppBar />
  <v-container width="1280" class="print-container">
    <slot />
  </v-container>
</template>

<script>
import AppBar from '@/components/AppBar.vue'
export default {
  components: {
    AppBar,
  },
  data: () => ({
    
  }),
}
</script>

<style>
.print-container {
  @media print {
    max-width: 980px;
  }
}
</style>