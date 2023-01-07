require('./bootstrap')

import { createApp } from 'vue'
import Demo from './components/Demo'
const app = createApp({})

app.component('demo', Demo)

app.mount('#app')