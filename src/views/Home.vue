<template>
  <div class="home">
    <TodoPanel/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoPanel from '@/components/TodoPanel.vue';

@Component({
  components: {
    TodoPanel,
  },
})
export default class Home extends Vue {}
</script>
