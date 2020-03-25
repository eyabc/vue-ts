<template>
  <div class="home">
    <children @counter="counter" />
    <p>
      부모에서 숫자를 보여줍니다 : {{ count }}
    </p>
  </div>
</template>

<script lang="ts">
import { Children } from '@/components/Common';
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
    Children
  },
})
export default class Home extends Vue {
  count:number = 0;

  counter() {
    this.count++;
  }
}
</script>
