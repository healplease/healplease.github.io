<template>
  <v-app-bar
    flat
    class="bg-primary d-print-none"
  >
    <v-container class="mx-auto d-flex align-center justify-center">
      <v-btn
        v-for="link in links"
        :key="link.to"
        :text="link.text"
        :to="link.to"
        :active="link.to === $route.path"
        variant="text"
      />

      <v-spacer />

      <v-btn
        icon
        @click="toggleTheme"
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<script>

export default {
  data: () => ({
    links: [
      {
        text: 'Home',
        to: '/',
      },
      {
        text: 'Bazaar Builder',
        to: '/bazaar-builder',
      },
      {
        text: 'CV',
        to: '/cv',
      },
    ],
  }),
}
</script>