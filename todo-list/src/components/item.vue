<template>
    <div class="input-group">
      <span class="input-group-addon">
        <input type="checkbox" :checked="status === 'clear'" aria-label="..." @change="changeStatus">
      </span>
        <input type="text" class="form-control" :value="title">
        <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="removeItem">X</button>
      </span>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Item extends Vue {
  @Prop() readonly id!: string;
  @Prop() readonly status!: 'active' | 'clear';
  @Prop() readonly title!: string;

  changeStatus($event: Event) {
    const checked: boolean = ($event.target as HTMLInputElement).checked;
    const arg = { id: this.id, status: 'active' };
    if (checked) { arg.status = 'clear'; }
    this.$store.commit('changeStatus', arg);
  }

  removeItem() {
    this.$store.commit('removeItem', this.id);
  }
}
</script>