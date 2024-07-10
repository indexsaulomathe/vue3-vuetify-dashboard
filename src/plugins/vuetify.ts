// src/plugins/vuetify.ts

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import '@fontsource/roboto'
import '@fontsource/open-sans'
import '@fontsource/lato'

// Vuetify e Tipos
import { createVuetify } from 'vuetify'

// Definições de Temas Personalizados
const customDarkTheme = {
  dark: true,
  colors: {
    background: '#15202b',
    surface: '#15202b',
    primary: '#3f51b5',
    secondary: '#03dac6',
    error: '#ff5722',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    accent: '#82B1FF',
    purple: '#9c27b0',
    pink: '#e91e63',
    deepPurple: '#673ab7',
    indigo: '#3f51b5',
    blue: '#2196F3'
  }
}

const customLightTheme = {
  dark: false,
  colors: {
    background: '#eee',
    surface: '#15202b',
    primary: '#3f51b5',
    secondary: '#00ccff',
    error: '#ffcc00',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    accent: '#82B1FF',
    purple: '#9c27b0',
    pink: '#e91e63',
    deepPurple: '#673ab7',
    indigo: '#3f51b5',
    blue: '#2196F3'
  }
}
// Criando a instância do Vuetify com os temas personalizados
const vuetifyInstance = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      customDarkTheme,
      customLightTheme
    }
  }
})

export default vuetifyInstance
