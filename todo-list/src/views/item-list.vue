<template>
    <div>
        <item v-for="item in renderList" :id="item.id" :title="item.title" :status="item.status"></item>
    </div>
</template>

<script lang="ts">
  import {Vue, Component, Watch } from 'vue-property-decorator';
  import Item from '@/components/item.vue';

  @Component({
    components: {
      Item,
    }
  })
  export default class ItemList extends Vue {
    data: any[] = [
      {id: 0, title: 'test', status: 'active'},
      {id: 1, title: 'test1', status: 'active'},
      {id: 2, title: 'test2', status: 'active'},
      {id: 3, title: 'test3', status: 'clear'}
    ];
    renderList: any[] = this.data;

    @Watch('$route.params.status')
    routeUpdate(newValue: string) {
      const data = this.data;
      this.renderList = newValue ?
        data.filter(item => {
          return item.status === newValue;
        })
        : data;
    }
  }
</script>

<style scoped>

</style>