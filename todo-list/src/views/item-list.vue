<template>
    <div>
        <item v-for="item in renderList" :id="item.id" :title="item.title" :status="item.status" :key="item.id"></item>
    </div>
</template>

<script lang="ts">
  import {Vue, Component, Watch } from 'vue-property-decorator';
  import Item from '@/components/item.vue';
  import { mapGetters } from 'vuex';


  @Component({
    components: {
      Item,
    },
    /* renderList" is not defined on
        비동기 실행으로 allTodoList 를 가져오기도 전에 renderList에 저장해 버리는 문제
        created()는 getter의 실행이 완료된 상태이다.
    * */
    computed: {
      ...mapGetters([
        'allTodoList',
        'activeTodoList',
        'clearTodoList',
      ])
    }
  })
  export default class ItemList extends Vue {
    renderList: any[] = [];

    created() {
      this.initRenderList(this.$route.params.status);
    }

    initRenderList(status: 'active' | 'clear') {
      if(!status) {
        this.renderList = this.allTodoList;
      } else if (status === 'active') {
        this.renderList = this.activeTodoList;
      } else if (status === 'clear') {
        this.renderList = this.clearTodoList;
      }
    }
    @Watch('$route.params.status')
    routeUpdate(newValue: string) {
        this.initRenderList(newValue);
    }
    @Watch('$store.state.todoList', { deep: true })
    routeUpdate() {
      this.initRenderList(this.$route.params.status);
    }
  }
</script>

<style scoped>

</style>