<template>
  <div class="form-auth">
    <div v-if="showLogin">
      <Login @login="accessRoom"/>
      <p>
        Don't have an account?
        <a href="#" @click="showLogin = false">Register Here</a>
      </p>
    </div>
    <div v-else>
      <Register @register="accessRoom"/>
      <p>
        Already  have an account?
        <a href="#" @click="showLogin = true">Login Here</a>
      </p>
    </div>
  </div>
</template>

<script>
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";
import {useRouter} from 'vue-router';
import { ref } from "vue";
export default {
  name: 'Home',
  components:{
    Login,
    Register
  },
  setup(){
    const showLogin = ref(true)
    const router = useRouter()

    const accessRoom = () => {
      router.push({name:'Room'})
    }

    return { showLogin, accessRoom }
  },
}
</script>
