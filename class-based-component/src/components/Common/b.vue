<template>
    <div>
        a에서 작성한 메세지는? => {{ text }}
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import Bus from '@/common/event-bus.ts';

    @Component
    export default class B extends Vue {
      text: string = '';
      created() {
        Bus.$on('sendText', (text: string) => {
          this.text = text;
        })
      }
    }
</script>