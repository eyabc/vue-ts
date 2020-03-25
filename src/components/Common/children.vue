<template>
    <div>
        {{ alertMessage }}
        {{ parentMessage }}
    </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

  @Component
  export default class Children extends Vue {
    @Prop() parentMessage?: string;
    alertMessage: string = '';

    // immediate: 속성의 현재값으로 이 핸들러를 즉시 호출하는 여부.
    // deep: 속성이 객체인 경우 deep 하게 감시하겠다.
    @Watch('parentMessage', {immediate: false, deep: true})
    update(value: string, oldValue: string) {
      this.alertMessage = '메세지를 업데이트 했습니다.';
    }
  }

</script>

<style scoped>

</style>
