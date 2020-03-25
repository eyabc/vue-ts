<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <hello-world msg="Welcome to Your Vue.js App" />
    <message />
  </div>
</template>

<script>
// @ is an alias to /src
import { HelloWorld, Message } from '@/components';

export default {
  name: 'Home',
  components: {
    Message, HelloWorld,
  },
};
</script>
