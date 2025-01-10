<template>
  <v-app id="inspire">
    <AppBar />
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
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