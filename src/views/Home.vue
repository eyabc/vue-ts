<template>
  <div class="home">
    <children></children>
  </div>
</template>

<script lang="ts">
import { Children } from '@/components/Common';
import { Component, Vue, Provide } from 'vue-property-decorator';
@Component({
  components: {
    Children
  },
})
export default class Home extends Vue {
  // 부모에서 주는 변수이름과 자식의 변수이름이 다를 때 괄호의 String으로 매핑시킬 수 있다.
  @Provide('message') msg: string = 'provide/inject example';
}
// prop를 쓸 땐 직계 부모에서만 쓸 수 있었다. 부모의 부모의 부모... 에게 주입받을 수 있다.
// 컴포넌트에 직접 넘겨주는 방식과 달리 어떤 컴포넌트로 직관적으로 넘어가는지 파악하기 어렵다.
// 일반로직에서는 권장되지 않는다.
</script>

