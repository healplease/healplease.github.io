/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

import colors from 'vuetify/util/colors'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.orange.darken4,
          secondary: colors.orange.lighten1,
          info: colors.deepOrange.lighten3,
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: colors.orange.darken4,
          secondary: colors.orange.lighten1,
          info: colors.deepOrange.darken3,
        },
      },
    },
    defaultTheme: 'dark',
  },
})
