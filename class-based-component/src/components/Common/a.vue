<template>
<div>
    <input type="text" v-model="text">
    <button @click="click">b로 전송</button>
</div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import Bus from '@/common/event-bus.ts';

    @Component
    export default class A extends Vue {
      text: string = '';

      click() {
        Bus.$emit('sendText', this.text);
      }
    }
</script>
