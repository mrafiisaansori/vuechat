<template>
    <Navbar/>
    <main class="content mt-3 shadow-sm p-0">
      <div class="bg-secondary text-white">
        <h3 class="p-2">Chat</h3>
      </div>
      <div class="chat-wrapper">
        <Chatbox/>
        <Chatform/>
      </div>
    </main>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Chatbox from '@/components/chat/Chatbox.vue';
import Chatform from '@/components/chat/Form.vue';

export default {
  components:{
    Navbar,
    Chatbox,
    Chatform
  }
}
</script>

<style>

</style>