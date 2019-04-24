<template>
  <div id="app">
    <div>{{ message }}</div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import TodoPanel from '@/components/TodoPanel';

@Component
export default class TodoPanel extends Vue {
  private message: string = 'Vue.ts TODO';
}
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
