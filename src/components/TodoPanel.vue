<template>
  <div class="todo-panel">
    <div class="todo-panel__input">
      <input v-model="text"
        @keydown.enter="addItem"
      >
    </div>
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
  private text: string = '';

  private addItem(): void {
    if (this.text) {
      this.$store.commit('addItem', this.text);
      this.text = '';
    }
  }
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

.todo-panel__input {
  margin-bottom: 1rem;
}

.todo-panel__input input {
  outline: none;
  padding: .4rem .8rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, .3);
  -webkit-transition: .3s;
     -moz-transition: .3s;
      -ms-transition: .3s;
       -o-transition: .3s;
          transition: .3s;
}

.todo-panel__input input:hover,
.todo-panel__input input:focus {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, .5);
}
</style>