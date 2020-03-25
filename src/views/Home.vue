<template>
  <div class="home">
    <message />
    <children :parentMessage="message"/>
    <button @click="changeMessage">메세지를 바꿔줄게요.</button>
  </div>
</template>

<script lang="ts">
import { Message, Children } from '@/components/Common';
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
    Message, Children
  },
})
export default class Home extends Vue {
  message: string = 'hello world';

  changeMessage() {
    this.message = 'change'
  }
}
</script>
