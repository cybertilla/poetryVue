import { createApp } from 'vue'
import App from './App.vue'
import 'mdb-vue-ui-kit/css/mdb.min.css';
import * as math from 'mathjs'

//mount app
createApp(App).mount('#app')

app.config.globalProperties.$math =math
