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
  /*
    mapGatters는 runtime 시점에서 this의 값을 할당하기 때문에 lint 에러가 나게 된다.
    선언만 미리하는 방식으로 린트에러를 없앨수는 있다.
  * */
  computed: {
    ...mapGetters([
      'allTodoList',
      'activeTodoList',
      'clearTodoList',
    ]),
  },
})
export default class ItemList extends Vue {
  renderList: any[] = [];
  allTodoList!: any;
  activeTodoList!: any;
  clearTodoList!: any;

  created() {
    this.$store.dispatch('initData');
  }

  initRenderList(status: string) {
    if (!status) {
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
  stateUpdate() {
    const status: string = this.$route.params.status;
    this.initRenderList(status);
  }
}
</script>

<style scoped>

</style>