// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Main App
import { createApp } from 'vue'
import App from './App.vue'
// Vue Router
import router from './routes'
// Vuetify Icons
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App);
app.use(router);

const vuetify = createVuetify({
    components,
    directives,
  })

app.use(vuetify).mount('#app');

