<template>
    <div>
        {{ message }}
    </div>
</template>

<script lang="ts">
  import {Component, Vue, Inject} from 'vue-property-decorator';

  @Component
  export default class Children extends Vue {
    // 초기화를 안하면 lint 에서 에러를 나게 한다.
    // ! 는 값이 초기화를 안한것이 의도적인것으로 인식함.
    // readonly 부모에서 받아오는 값으로 변경이 되어서는 안된다.
    @Inject() readonly message!: string;
  }

</script>

<style scoped>

</style>
