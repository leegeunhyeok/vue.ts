<template>
  <div class="todo-panel">
    <TodoItem v-for="(item, i) in todo"
      :key="i"
      :data="item"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import TodoItem from '@/components/TodoItem.vue';

@Component({
  components: {
    TodoItem,
  },
  computed: {
    todo() {
      return this.$store.state.todoData;
    },
  },
})
export default class TodoPanel extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped>
.todo-panel {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 1rem;
  -webkit-transform: translate(-50%, -50%);
     -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
       -o-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}
</style>