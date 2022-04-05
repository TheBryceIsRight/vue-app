import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg'


const app = createApp(App)
const vuetify = createVuetify(
  components,
  directives,
  {
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  }
) // Replaces new Vuetify(...)

app.use(vuetify)

app.mount('#app')
