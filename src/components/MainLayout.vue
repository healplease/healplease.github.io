<template>
  <AppBar />
  <v-container>
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