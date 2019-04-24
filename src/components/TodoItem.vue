<template>
  <div class="todo-item">{{ data }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TodoItem extends Vue {
  @Prop() private data!: string;
}
</script>

<style scoped>
.todo-item {
  width: 100%;
  text-align: left;
  padding: .4rem .8rem;
  margin: 5px 0;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .3);
}
</style>