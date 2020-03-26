<template>
  <div>
    <A></A>
    <B></B>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { A, B } from "@/components/Common";

  @Component({
    components: { B, A }
  })
  export default class App extends Vue {
  }
</script>