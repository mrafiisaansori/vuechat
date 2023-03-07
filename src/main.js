import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/app.css'

import {projectAuth} from './config/firebase'

let app

projectAuth.onAuthStateChanged(()=>{
  if(!app){
    app = createApp(App)
    .use(router)
    .mount('#app')
  }
})


