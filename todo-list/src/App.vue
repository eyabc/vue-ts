<template>
    <div id="app">
        <h1>TODO LIST</h1>
        <nav-header></nav-header>
        <item-input></item-input>
        <item></item>
    </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import * as common from '@/components';
  // import { NavHeader, Item, ItemInput } from '@/components';

  @Component({
    components: { ...common }
  })
  export default class App extends Vue {

  }
</script>

<style>
    #app {
        padding: 100px;
    }
</style>
